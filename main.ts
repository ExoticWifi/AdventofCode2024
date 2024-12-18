import { DayOne } from "./Day01/DayOne.ts";
import { DayTwo } from "./Day02/DayTwo.ts";

async function main() {
  await DayOne()
  await DayTwo()
}

if (import.meta.main) {
  await main()
}
