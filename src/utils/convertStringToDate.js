

export const convertStringToDate = (str) => {
    const date = new Date(str).toDateString();

    return { date }
}