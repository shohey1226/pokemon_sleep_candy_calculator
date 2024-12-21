import { FormValues } from "@/types";

export function calculateCandy(formValues: FormValues): number {

  console.log(formValues);
  // const { pokemonType, pokemonLevel, baseCandy } = formData;

  // // Example calculation logic
  // let candyMultiplier = 1;
  // if (pokemonType === 'rare') {
  //   candyMultiplier = 2;
  // } else if (pokemonType === 'legendary') {
  //   candyMultiplier = 3;
  // }

  // const totalCandy = baseCandy + (pokemonLevel * candyMultiplier);
  // return totalCandy;
  return Math.floor(Math.random() * 100);
}