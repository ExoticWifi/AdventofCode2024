import { getInputArray } from "../Utils/InputProvider.ts";
import { isSorted, isValidInterval } from "../Utils/NumberFormatter.ts";

export async function DayTwo() {
    const totalTextList = await getInputArray('./DayTwo/DayTwoInput.txt')
    let count = 0

    for (let i = 0; i < totalTextList.length; i++) {
        const stringReport = totalTextList[i].split(" ")
        const numReport = []

        for (let x = 0; x < stringReport.length; x++) {
            numReport.push(Number(stringReport[x]))
        }

        const isSort = isSorted(numReport)
        if (isSort && isValidInterval(numReport)) {
            count++
        } else {
            for (let x = 0; x < numReport.length; x++) {
                const y = numReport.slice()
                y.splice(x, 1)

                if (isSorted(y) && isValidInterval(y)) {
                    count++
                    break
                }
            }
        }
    }

    console.log(`Number of safe tests: ${count}`)
}