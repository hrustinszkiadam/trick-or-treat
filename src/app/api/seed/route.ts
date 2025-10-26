import { redirect, RedirectType } from 'next/navigation';
import { NextResponse } from 'next/server';
import { validatePassword } from '@/features/seed/lib/validate-password';
import { seedDatabase } from '@/features/seed/lib/seed-database';

export async function GET({ url }: Request) {
  const searchParams = new URL(url).searchParams;
  const password = searchParams.get('password') || searchParams.get('p');

  const validationError = validatePassword(password);
  if (validationError) {
    return validationError;
  }

  const result = await seedDatabase();
  if (result instanceof NextResponse) {
    return result;
  }

  return redirect('/', RedirectType.replace);
}
