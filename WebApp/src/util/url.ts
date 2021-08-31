
const { REACT_APP_SYSTEM_URL } = process.env

export const buildSystemUrl = (source: string) => {
    return `${REACT_APP_SYSTEM_URL}${source}`
}