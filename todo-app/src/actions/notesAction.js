import { ADD_NOTE, TOOGLE_NOTE } from "./types";

export const addNote = item => dispatch => {
  dispatch({
    type: ADD_NOTE,
    payload: item
  });
};

export const toogleNote = id => dispatch => {
  dispatch({
    type: TOOGLE_NOTE,
    id: id
  });
};
