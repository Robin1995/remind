import { createStore } from "redux";
import { ADD, ADD_FAVORITE, REMOVE, REMOVE_FAVORITE } from "./actions";
const initialState = {
    messages: [],
    favorites: [],
    favoriteAdded: false
};
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                messages: [...state.messages, action.message]
            };
        case ADD_FAVORITE:
            if (!state.favorites.includes(action.favorite)) {
                return {
                    ...state,
                    favorites: [...state.favorites, action.favorite],
                    favoriteAdded: false
                };
            }
            else {
                return {
                    ...state,
                    favoriteAdded: true
                };
            }
        case REMOVE:
            const messages = [...state.messages];
            messages.splice(action.index, 1);
            return { ...state, messages: messages };
        case REMOVE_FAVORITE:
            const favorites = [...state.favorites];
            favorites.splice(action.index, 1);
            return { ...state, favorites: favorites };
        default:
            return state;
    }
};

export const store = createStore(
    messageReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
