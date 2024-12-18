export async function getInputArray(path: string) {
    const text = Deno.readTextFile(path)
    const totalTextList = (await text).split(/\n/)
    return totalTextList
}

export function getWholeString(path: string) {
    const text = Deno.readTextFile(path)
    return text
}