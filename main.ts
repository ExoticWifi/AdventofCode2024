import { DayOne } from "./DayOne/DayOne.ts";
import { DayTwo } from "./DayTwo/DayTwo.ts";

async function main() {
  await DayOne()
  await DayTwo()
}

if (import.meta.main) {
  await main()
}
