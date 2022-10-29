import { CHAR_LOAD, SEARCH_CHAR } from "./types";

const defaultState = {
  characters: [],
};
export const charactersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, characters: [state.characters, ...action.data] };
    case SEARCH_CHAR:
      return { ...state, characters: [...action.data] };
    default:
      return state;
  }
};
