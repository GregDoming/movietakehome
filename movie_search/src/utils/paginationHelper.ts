export const calculateTotalPages = (totalResults: number, resultsPerPage: number = 10) => {
    return Math.ceil(totalResults / resultsPerPage)
}

export const splitArray = (arr: any[]): { firstArr: any[], secondArr: any[] } | undefined => {
    if (arr.length < 10) return;
    const firstArr = arr.slice(0, 10);
    const secondArr = arr.slice(10);
    return { firstArr, secondArr };
}