import { CHAR_LOAD, SEARCH_CHAR } from "./types";

export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, ...action.data };
      case SEARCH_CHAR:
        return { ...state, ...state.characters,  ...action.searchData };
    default:
      return state;
  }
};
