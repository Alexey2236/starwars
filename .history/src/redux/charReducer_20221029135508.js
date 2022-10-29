import { CHAR_LOAD, GET_DESCR_CHAR } from "./types";

initialState = {
  characters: [], 
  charItem: {}, 
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAR_LOAD:
      return { ...state.characters, ...action.data };
      case GET_DESCR_CHAR:
      return { ...state.charItem, ...action.data };
    default:
      return state;
  }
};
