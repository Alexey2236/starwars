import { SEARCH_CHAR } from "./types";

export const descrCharReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CHAR:
      return { ...state, ...action.data };
    default:
      return state;
  }
};