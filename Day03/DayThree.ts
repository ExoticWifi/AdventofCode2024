import { getWholeString } from "../Utils/InputProvider.ts";

export async function DayThree() {
    const regex =  /(?:mul\(([\d,]*)\)|do\(\)|don't\(\))/g
    const filteredRegex = /mul\(([^)]*)\)/
    const input = await getWholeString('./Day03/DayThreeInput.txt')
    const mulList = input.match(regex)!

    const numberList = []
    let isOff = false
    for (let i = 0; i < mulList.length; i++) {
        if (mulList[i] === "don't()") {
            isOff = true
        } else if (mulList[i] === "do()") {
            isOff = false
        } else {
            if (!isOff) {
                numberList.push(mulList[i])
            }
        }
    }
    

    const extractedValues = numberList.map(match => {
        const result = filteredRegex.exec(match)

        if (result) {
            const list = result[1].split(",").map(arg => arg.trim())
            if (list.length > 2) {
                list.splice(2, list.length - 2)
            }
            return list
        }
        return []
    }
    )

    let total = 0
    extractedValues.map(tuple => {
        if (tuple.length > 0) {
            const x = Number(tuple[0])
            const y = Number(tuple[1])
    
            total += x * y
        }
    })

    console.log(`Total: ${total}`)
}