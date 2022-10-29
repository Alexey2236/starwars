import { CHAR_LOAD } from "./types";

const initialState = {
  characters: [],
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, characters: [...action.payload] };
    default:
      return state;
  }
};
