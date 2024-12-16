import { DayOne } from "./DayOne/DayOne.ts";

async function main() {
  await DayOne()
}

if (import.meta.main) {
  await main()
}
