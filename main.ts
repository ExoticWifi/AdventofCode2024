import { DayOne } from "./Day01/DayOne.ts";
import { DayTwo } from "./Day02/DayTwo.ts";
import { DayThree } from "./Day03/DayThree.ts";
import { DayFour } from "./Day04/DayFour.ts";
import { DayFive } from "./Day05/DayFive.ts";

async function main() {
  await DayOne()
  await DayTwo()
  await DayThree()
  await DayFour()
  await DayFive()
}

if (import.meta.main) {
  await main()
}
