import { combineReducers } from "redux";
import { charactersReducer } from "./charReducer";
export const rootReducer = combineReducers({
 characters: charactersReducer,
});
