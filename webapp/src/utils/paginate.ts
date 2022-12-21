export const paginateArray = (array: any[], pageNumber: number, pageSize: number) => {
    const page = array.slice(
        (pageNumber - 1) * pageSize,
        pageNumber * pageSize
    );
    return page;
};