import { ADD_NOTE, TOOGLE_NOTE } from "./types";

let nextId = 0;
export const addNote = (item, completed) => dispatch => {
  dispatch({
    type: ADD_NOTE,
    id: nextId++,
    item,
    completed
  });
};

export const toogleNote = id => dispatch => {
  dispatch({
    type: TOOGLE_NOTE,
    id: id
  });
};
