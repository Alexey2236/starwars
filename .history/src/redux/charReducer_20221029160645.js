import { CHAR_LOAD } from "./types";
const defaultSatte = {
  characters: {},
};
export const charactersReducer = (state = defaultSatte, action) => {
  console.log(action)
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, characters: action.data };
    default:
      return state;
  }
};
