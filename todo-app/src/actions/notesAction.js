import { ADD_NOTE, GET_NOTES } from "./types";

export const addNote = note => dispatch => {
  dispatch({
    type: ADD_NOTE,
    payload: note
  });
};

export const getNotes = () => dispatch => {
  dispatch({
    type: GET_NOTES
  });
};
