import { CHAR_LOAD, SEARCH_CHAR } from "./types";

const default = {
  characters: [], 
  search: [], 
}
export const charactersReducer = (state = default, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, ...action.data };
      case SEARCH_CHAR:
        return { ...state, ...action.data };
    default:
      return state;
  }
};
