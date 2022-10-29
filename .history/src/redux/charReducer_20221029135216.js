import { CHAR_LOAD, GET_DESCR_CHAR } from "./types";
defaultState = {
  characters: [], 
  charItem: {}, 
}
export const charactersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state, ...action.data };
      case GET_DESCR_CHAR:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
