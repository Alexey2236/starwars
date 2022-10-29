import { CHAR_LOAD } from "./types";
const defaultSatte = {
  characters: {}, 
}
export const charactersReducer = (state = defaultSatte, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
