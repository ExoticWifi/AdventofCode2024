export function isSorted(list: number[]): boolean {
    let isAcending = true

    if (list[0] > list[list.length - 1]) {
        isAcending = false
    }

    for (let i = 0; i < list.length - 1; i++) {
        if (isAcending) {
            if (list[i] < list[i + 1]) {
                continue
            } else {
                return false
            }
        } else {
            if (list[i] > list[i + 1]) {
                continue
            } else {
                return false
            }
        }
    }

    return true
}

export function isValidInterval(list: number[]): boolean {
    for (let i = 0; i < list.length - 1; i++) {
        const difference = Math.abs(list[i] - list[i + 1])
        if ((1 > difference) || (difference > 3)) {
            return false
        }
    }
    return true
}