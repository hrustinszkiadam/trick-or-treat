export const dietaryRestrictions = [
  'laktóz',
  'glutén',
  'mogyoró és dió',
  'tojás',
] as const;

export type DietaryRestriction = (typeof dietaryRestrictions)[number];
