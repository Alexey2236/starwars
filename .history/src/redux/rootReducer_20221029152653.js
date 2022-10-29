import { combineReducers } from "redux";
import { charactersReducer } from "./charReducer";
import {descrCharReducer} from './descrCharReducer'
import {searchReducer} from './searchReducer'
export const rootReducer = combineReducers({
 characters: charactersReducer,
 charItemDescr: descrCharReducer, 
 search: searchReducer, 
});
