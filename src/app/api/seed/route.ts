import { redirect, RedirectType } from 'next/navigation';
import { NextResponse } from 'next/server';
import { validatePassword } from '@/features/seed/lib/validate-password';
import { seedDatabase } from '@/features/seed/lib/seed-database';
import tryCatch from '@/lib/tryCatch';
import { revalidateTag } from 'next/cache';

export async function GET({ url }: Request) {
  const searchParams = new URL(url).searchParams;
  const password = searchParams.get('password') || searchParams.get('p');

  const [, passwordValidationError] = await tryCatch(
    Promise.resolve(validatePassword(password)),
  );
  if (passwordValidationError) {
    return NextResponse.json(
      { error: passwordValidationError.message },
      {
        status: passwordValidationError.message.includes('required')
          ? 400
          : 401,
      },
    );
  }

  const [, seedError] = await tryCatch(seedDatabase());
  if (seedError) {
    return NextResponse.json({ error: seedError.message }, { status: 500 });
  }

  revalidateTag('addresses', 'max');
  return redirect('/', RedirectType.replace);
}
