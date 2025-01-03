import { DayOne } from "./Day01/DayOne.ts";
import { DayTwo } from "./Day02/DayTwo.ts";
import { DayThree } from "./Day03/DayThree.ts";
import { DayFour } from "./Day04/DayFour.ts";
import { DayFive } from "./Day05/DayFive.ts";
import { DaySix } from "./Day06/DaySix.ts";
import { DaySeven } from "./Day07/DaySeven.ts";

async function main() {
  await DayOne()
  await DayTwo()
  await DayThree()
  await DayFour()
  await DayFive()
  await DaySix()
  await DaySeven()
}

if (import.meta.main) {
  await main()
}
