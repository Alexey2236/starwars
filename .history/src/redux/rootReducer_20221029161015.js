import { combineReducers } from "redux";
import { charactersReducer } from "./charReducer";
import {descrCharReducer} from './descrCharReducer'
import {searchReducer} from './searchReducer'
export const rootReducer = combineReducers({
  charactersReducer,
  descrCharReducer, 
  searchReducer, 
});


// characters:

// charItemDescr:

// search: