import { GET_DESCR_CHAR } from "./types";

export const charactersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_DESCR_CHAR:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
