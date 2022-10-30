import { CHAR_LOAD, SEARCH_CHAR } from "./types";

export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, ...action.data };
    case SEARCH_CHAR:
      return { ...state, ...[1, 2, 3]};
    default:
      return state;
  }
};
