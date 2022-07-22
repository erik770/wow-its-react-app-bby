export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (pagesCount) => {
   const resArray = [];
    for (let i = 0; i < pagesCount; i++) {
        resArray.push(i + 1);
    }
    return resArray;
}