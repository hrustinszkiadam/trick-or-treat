import { NextResponse } from "next/server";

export const validatePassword = (password: string | null): NextResponse<{ error: string }> | null => {
  if (!process.env.SEED_PASSWORD) {
    return NextResponse.json({ error: 'SEED_PASSWORD not configured' }, { status: 500 });
  }
  if(!password) {
    return NextResponse.json({ error: 'Password is required' }, { status: 400 });
  }
  if (password !== process.env.SEED_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return null;
}