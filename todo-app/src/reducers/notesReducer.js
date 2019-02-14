import { ADD_NOTE, TOOGLE_NOTE } from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case TOOGLE_NOTE:
      return state.map(item => {
        return item.id === action.id ? { ...item, completed: !item.completed } : item;
      });
    default:
      return state;
  }
};
