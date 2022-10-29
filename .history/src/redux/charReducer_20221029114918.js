import { CHAR_LOAD } from "./types";

const initialState = {
  characters: [],
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return {
        ...state,
        characters: [...state.characters, ...action.data],
      };
    default:
      return state;
  }
};
