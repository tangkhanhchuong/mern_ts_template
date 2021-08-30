const toLocaleString = (number: string | number) => {
    return number.toLocaleString().replace(",", ".")
}

export const NumberFormatter = {
    toLocaleString
}