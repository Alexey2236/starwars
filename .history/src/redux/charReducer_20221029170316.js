import { CHAR_LOAD, SEARCH_CHAR } from "./types";

const defaultState = {
  characters: [],
  search: [],
};
export const charactersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, characters: [...action.payload] };
    case SEARCH_CHAR:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
