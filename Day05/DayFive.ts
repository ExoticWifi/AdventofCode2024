import { getInputArray } from "../Utils/InputProvider.ts";

export async function DayFive() {
    const inputArray = await getInputArray('./Day05/DayFiveInput.txt')
    const rulesArray: number[][] = []
    const updatesArray: number[][] = []
    const validUpdates: number[][] = []
    const fixedUpdates: number[][] = []
    let didFlip = false
    let runningTotal = 0

    inputArray.map(strInput => {
        if (didFlip) {
            const numArray = strInput.split(',').map(str => Number(str))
            updatesArray.push(numArray)
        } else {
            if (strInput === '') {
                didFlip = true
            } else {
                const strArray = strInput.split('|')
                rulesArray.push([Number(strArray[0]), Number(strArray[1])])
            }
        }
    })

    updatesArray.map(update => {
        let isBroken = false
        for (let i = 0; i < update.length; i++) {
            const rules = rulesArray.filter(rule => rule[1] === update[i])
            for (let x = i + 1; x < update.length; x++) {
                const brokenRules = rules.filter(rule => rule[0] === update[x])
                if (brokenRules.length > 0) {
                    isBroken = true
                    break
                }
            }

            if (isBroken) {
                break
            }
        }

        if (!isBroken) {
            validUpdates.push(update)
        }
    })

    for (let i = 0; i < validUpdates.length; i++) {
        const currArray = validUpdates[i]
        const middleIndex = Math.floor(currArray.length / 2)
        const middleValue = currArray[middleIndex]
        runningTotal += middleValue
    }

    console.log(`Correct Middle Number Total: ${runningTotal}`)

    updatesArray.map(update => {
        let isBroken = false
        let isFixed = false
        while (!isFixed) {
            let stillBroke = false
            for (let i = 0; i < update.length; i++) {
                const rules = rulesArray.filter(rule => rule[1] === update[i])
                for (let x = i + 1; x < update.length; x++) {
                    const brokenRule = rules.find(rule => rule[0] === update[x])
                    if (brokenRule) {
                        update[i] = brokenRule![0]
                        update[x] = brokenRule![1]
                        isBroken = true
                        stillBroke = true
                        break
                    }
                }
                if (stillBroke) {
                    break
                }
            }
            if (!stillBroke) {
                isFixed = true
            }
        }

        if (isBroken) {
            fixedUpdates.push(update)
        }
    })

    runningTotal = 0
    for (let i = 0; i < fixedUpdates.length; i++) {
        const currArray = fixedUpdates[i]
        const middleIndex = Math.floor(currArray.length / 2)
        const middleValue = currArray[middleIndex]
        runningTotal += middleValue
    }
    console.log(`Fixed Middle Total: ${runningTotal}`)
}