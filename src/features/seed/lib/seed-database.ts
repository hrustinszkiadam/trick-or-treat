import { NextResponse } from "next/server";

export const seedDatabase = async (): Promise<object | NextResponse<{error: string}>> => {
  try {
    const result = {};
    if (!result) {
      throw new Error('Database Error: Failed to Seed Database');
    }
    return result;
  } catch (error) {
    if(error instanceof Error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
};
