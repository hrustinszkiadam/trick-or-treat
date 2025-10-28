import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortedDietaryRestrictions(dietaryRestrictions: string[]) {
  return Array.from(dietaryRestrictions).sort((a, b) => a.localeCompare(b));
}
