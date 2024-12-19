import { getWholeString } from "../Utils/InputProvider.ts";

export async function DayFour() {
    const wholeString = await getWholeString("./Day04/DayFourInput.txt")
    const lineStringList = wholeString.split('\n')
    const lineArrayList: string[][] = []


    lineStringList.map(line => {
        const string = line.split('')
        lineArrayList.push(string)
        return
    })

    let count = 0
    for (let y = 0; y < lineArrayList.length; y++) {
        const line = lineArrayList[y]
        for (let x = 0; x < line.length; x++) {
            if (line[x] === 'X') {
                if (line[x + 1] === 'M') {
                    if (line[x + 2] === 'A') {
                        if (line[x + 3] === 'S') {
                            count++
                        }
                    }
                }

                if (line[x - 1] === 'M') {
                    if (line[x - 2] === 'A') {
                        if (line[x - 3] === 'S') {
                            count++
                        }
                    }
                }

                if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x] === 'M')) {
                    if ((Array.isArray(lineArrayList[y - 2])) && (lineArrayList[y - 2][x] === 'A')) {
                        if ((Array.isArray(lineArrayList[y - 3])) && (lineArrayList[y - 3][x] === 'S')) {
                            count++
                        }
                    }
                }

                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x] === 'M')) {
                    if ((Array.isArray(lineArrayList[y + 2])) && (lineArrayList[y + 2][x] === 'A')) {
                        if ((Array.isArray(lineArrayList[y + 3])) && (lineArrayList[y + 3][x] === 'S')) {
                            count++
                        }
                    }
                }

                if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x - 1] === 'M')) {
                    if ((Array.isArray(lineArrayList[y - 2])) && (lineArrayList[y - 2][x - 2] === 'A')) {
                        if ((Array.isArray(lineArrayList[y - 3])) && (lineArrayList[y - 3][x - 3] === 'S')) {
                            count++
                        }
                    }
                }

                if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x + 1] === 'M')) {
                    if ((Array.isArray(lineArrayList[y - 2])) && (lineArrayList[y - 2][x + 2] === 'A')) {
                        if ((Array.isArray(lineArrayList[y - 3])) && (lineArrayList[y - 3][x + 3] === 'S')) {
                            count++
                        }
                    }
                }

                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x - 1] === 'M')) {
                    if ((Array.isArray(lineArrayList[y + 2])) && (lineArrayList[y + 2][x - 2] === 'A')) {
                        if ((Array.isArray(lineArrayList[y + 3])) && (lineArrayList[y + 3][x - 3] === 'S')) {
                            count++
                        }
                    }
                }

                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x + 1] === 'M')) {
                    if ((Array.isArray(lineArrayList[y + 2])) && (lineArrayList[y + 2][x + 2] === 'A')) {
                        if ((Array.isArray(lineArrayList[y + 3])) && (lineArrayList[y + 3][x + 3] === 'S')) {
                            count++
                        }
                    }
                }
            }
        }
    }

    console.log(`XMAS count: ${count}`)

    count = 0
    for (let y = 0; y < lineArrayList.length; y++) {
        const line = lineArrayList[y]
        for (let x = 0; x < line.length; x++) {
            let masCount = 0
            if (line[x] === 'A') {
                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x - 1] === 'M')) {
                    if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x + 1] === 'S')) { 
                        masCount++
                    }
                }

                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x + 1] === 'M')) {
                    if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x - 1] === 'S')) { 
                        masCount++
                    }
                }

                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x - 1] === 'S')) {
                    if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x + 1] === 'M')) { 
                        masCount++
                    }
                }

                if ((Array.isArray(lineArrayList[y + 1])) && (lineArrayList[y + 1][x + 1] === 'S')) {
                    if ((Array.isArray(lineArrayList[y - 1])) && (lineArrayList[y - 1][x - 1] === 'M')) { 
                        masCount++
                    }
                }
            }

            if (masCount >= 2) {
                count++
            }
        }
    }

    console.log(`MAS count: ${count}`)
}