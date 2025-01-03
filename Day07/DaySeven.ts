import { TextLineStream } from "https://deno.land/std@0.177.0/streams/text_line_stream.ts";

export async function DaySeven() {
    const isNormal = false
    const inputPath = isNormal ? './Day07/Inputs/Input.txt' : './Day07/Inputs/SmallerInput.txt'
    const file = await Deno.open(inputPath)
    const fileStream = file.readable.pipeThrough(new TextDecoderStream).pipeThrough(new TextLineStream)
    let total = 0
    for await (const line of fileStream) {
        const strings = line.split(':')
        const equationStrings = strings[1].split(' ')
        const result = Number(strings[0])
        equationStrings.shift()
        const equationNumbers: number[] = equationStrings.map(str => Number(str))

        const outputs = [equationNumbers.shift()!]
        const remainingNumbers = Array.from(equationNumbers)

        while (remainingNumbers.length > 0) {
            const outputsLength = outputs.length
            const b = remainingNumbers.shift()!
            for (let i = 0; i < outputsLength; i++) {
                const a = outputs.shift()!
                outputs.push(a + b)
                outputs.push(a * b)
                outputs.push(Number(String(a) + String(b)))
            }
        }
        if (outputs.includes(result)){
            console.log('HIT')
            total += result
        }
    }

    console.log(`Operator Total: ${total}`)
}