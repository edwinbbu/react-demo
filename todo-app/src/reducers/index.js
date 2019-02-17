import notesReducer from "./notesReducer";
import filterReducer from "./filterReducer";
import { combineReducers } from "redux";

export default combineReducers({ notes: notesReducer, filter: filterReducer });
