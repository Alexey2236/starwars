import { CHAR_LOAD } from "./types";

export const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
