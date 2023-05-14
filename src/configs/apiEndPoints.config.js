
const apiBaseURL = "https://www.thecocktaildb.com/api/json/v1/1/"

export const getAllData = {
    url: `${apiBaseURL}search.php?s=`,
    key: 'getAll',
};

export const getSearchData = {
    url: `${apiBaseURL}search.php?s=`,
    key: 'cocktailList',
};

export const getItemByID = {
    url: `${apiBaseURL}lookup.php?i=`,
    key: 'itemById_',
};