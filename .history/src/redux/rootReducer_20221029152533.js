import { combineReducers } from "redux";
import { charactersReducer } from "./charReducer";
import {descrCharReducer} from './descrCharReducer'
import {searchReducer} from './descrCharReducer'
export const rootReducer = combineReducers({
 characters: charactersReducer,
 charItemDescr: descrCharReducer, 
 search: 
});
