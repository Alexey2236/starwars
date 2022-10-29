import { SEARCH_CHAR } from "./types";

export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_CHAR:
      return {  ...action.data };
    default:
      return state;
  }
};