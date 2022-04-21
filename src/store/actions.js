export const ADD = 'ADD';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE = 'REMOVE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};
export const addFavorite = (favorite) => {
    return {
        type: ADD_FAVORITE,
        favorite
    }
};
export const removeMessage = (index) => {
    return {
        type: REMOVE,
        index
    }
};
export const removeFavorite = (index) => {
    return {
        type: REMOVE_FAVORITE,
        index
    }
};
