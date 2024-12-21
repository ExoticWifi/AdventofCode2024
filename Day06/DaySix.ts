import { TextLineStream } from "https://deno.land/std@0.177.0/streams/mod.ts";

export async function DaySix() {
    const file = await Deno.open('./Day06/DaySixInput.txt')
    const obstacleCoords: number[][] = []
    const emptySpots: number[][] = []
    const fileStream = file.readable.pipeThrough(new TextDecoderStream).pipeThrough(new TextLineStream)
    let guardPosition: number[] = []
    let currentY = 0
    let currentX = 0


    for await (const line of fileStream) {
        const lineArray = line.split('')
        lineArray.map(spot => {
            if (spot === '#') {
                obstacleCoords.push([currentX, currentY])
            } else if (spot === '^') {
                guardPosition = [currentX, currentY]
            } else {
                emptySpots.push([currentX, currentY])
            }
            currentX++
        })
        currentX = 0
        currentY++
    }

    const [visitedCoords, _] = runRoute(Array.from(guardPosition), obstacleCoords)

    console.log(`Total steps: ${visitedCoords.length}`)
    
//  TODO: Make this more efficient. Commenting out for now because I run everything
    // let numLoopSpots = 0
    // emptySpots.forEach((spot) => {
    //     const copyObstacles: number[][] = Array.from(obstacleCoords)
    //     console.log(spot)
    //     copyObstacles.push(spot)

    //     const [_, steps] = runRoute(Array.from(guardPosition), copyObstacles)
    //     if (steps >= 10000) {
    //         numLoopSpots++
    //     }

    // })

    // console.log(`Total infinite loop spots: ${numLoopSpots}`)
}

function runRoute(guardPosition: number[], obstacleCoords: number[][]): [number[][], number] {
    const visitedCoords: number[][] = []
    let currentDirection = "up"
    let currentSteps = 0

    while ((guardPosition[0] > -1) && (guardPosition[0] < 131) && (guardPosition[1] > -1) && (guardPosition[1] < 131)) {
        let didHit = false
        switch (currentDirection) {
            case 'up':
                for(let i = 0; i < obstacleCoords.length; i++) {
                    const obstacle = obstacleCoords[i]
                    if ((obstacle[0] === guardPosition[0]) && (obstacle[1] === guardPosition[1] - 1)) {
                        didHit = true
                        currentDirection = 'right'
                        break
                    }
                }

                if (!didHit) {
                    currentSteps++
                    let didMatch = false
                    visitedCoords.map(coord => {
                        if ((coord[0] === guardPosition[0]) && (coord[1] === guardPosition[1])) {
                            didMatch = true
                        }
                    })
                    if (!didMatch) {
                        visitedCoords.push([guardPosition[0], guardPosition[1]])
                    }
                    guardPosition[1]--
                }

                break
            case 'down':
                for(let i = 0; i < obstacleCoords.length; i++) {
                    const obstacle = obstacleCoords[i]
                    if ((obstacle[0] === guardPosition[0]) && (obstacle[1] === guardPosition[1] + 1)) {
                        didHit = true
                        currentDirection = 'left'
                        break
                    }
                }

                if (!didHit) {
                    currentSteps++
                    let didMatch = false
                    visitedCoords.map(coord => {
                        if ((coord[0] === guardPosition[0]) && (coord[1] === guardPosition[1])) {
                            didMatch = true
                        }
                    })
                    if (!didMatch) {
                        visitedCoords.push([guardPosition[0], guardPosition[1]])
                    }
                    guardPosition[1]++
                }
                break
            case 'left':
                for(let i = 0; i < obstacleCoords.length; i++) {
                    const obstacle = obstacleCoords[i]
                    if ((obstacle[0] === guardPosition[0] - 1) && (obstacle[1] === guardPosition[1])) {
                        currentDirection = 'up'
                        didHit = true
                        break
                    }
                }

                if (!didHit) {
                    currentSteps++
                    let didMatch = false
                    visitedCoords.map(coord => {
                        if ((coord[0] === guardPosition[0]) && (coord[1] === guardPosition[1])) {
                            didMatch = true
                        }
                    })
                    if (!didMatch) {
                        visitedCoords.push([guardPosition[0], guardPosition[1]])
                    }
                    guardPosition[0]--
                }
                break
            case 'right':
                for(let i = 0; i < obstacleCoords.length; i++) {
                    const obstacle = obstacleCoords[i]
                    if ((obstacle[0] === guardPosition[0] + 1) && (obstacle[1] === guardPosition[1])) {
                        currentDirection = 'down'
                        didHit = true
                        break
                    }
                }

                if (!didHit) {
                    currentSteps++
                    let didMatch = false
                    visitedCoords.map(coord => {
                        if ((coord[0] === guardPosition[0]) && (coord[1] === guardPosition[1])) {
                            didMatch = true
                        }
                    })
                    if (!didMatch) {
                        visitedCoords.push([guardPosition[0], guardPosition[1]])
                    }
                    guardPosition[0]++
                }
                break
        }
        if (currentSteps >= 10000) {
            break
        }
    }
    return [visitedCoords, currentSteps]
}