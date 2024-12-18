import { getInputArray } from "../Utils/InputProvider.ts";

export async function DayOne() {
    const totalTextList = await getInputArray('./DayOne/DayOneInput.txt')
    let listOne = []
    let listTwo = []
    let constTotal = 0
    let simTotal = 0

    for (let i = 0; i < totalTextList.length; i++) {
        const tempList = totalTextList[i].split('   ')
        listOne.push(Number(tempList[0]))
        listTwo.push(Number(tempList[1]))
    }

    listOne = listOne.sort((a, b) => a - b)
    listTwo = listTwo.sort((a, b) => a - b)

    for (let i = 0; i < listOne.length; i++) {
        let numOccurances = 0
        constTotal += Math.abs(listOne[i] - listTwo[i])

        for (let x = 0; x < listTwo.length; x++) {
            if (listOne[i] === listTwo[x]) {
                numOccurances++
            }
        }

        simTotal += (listOne[i] * numOccurances)
    }

    console.log(`Total difference: ${constTotal}`)
    console.log(`Simularity Score : ${simTotal}`)
}