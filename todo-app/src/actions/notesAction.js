import { ADD_NOTE } from "./types";

export const addNote = note => dispatch => {
  dispatch({
    type: ADD_NOTE,
    payload: note
  });
};
