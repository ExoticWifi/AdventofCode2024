import { DayOne } from "./Day01/DayOne.ts";
import { DayTwo } from "./Day02/DayTwo.ts";
import { DayThree } from "./Day03/DayThree.ts";

async function main() {
  await DayOne()
  await DayTwo()
  await DayThree()
}

if (import.meta.main) {
  await main()
}
