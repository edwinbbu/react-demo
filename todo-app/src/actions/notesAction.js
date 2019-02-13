import { ADD_NOTE } from "./types";

export const addNote = note => dispatch => {
  dispatch({
    type: ADD_NOTE,
    payload: note
  });
};

export const getNotes = () => subscribe => {
  subscribe(() => {
    let notes = this.props.store.getState();
    console.log("Display1:", notes);
    return notes;
  });
};
