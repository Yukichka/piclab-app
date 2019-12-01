import { dataset } from "../dataset";
import { combineReducers } from "redux";

function comments(state = {}, action) {
  // console.log(action.comment);
  switch (action.type) {
    case "ADD_COMMENT":
      if (!state[action.picId]) {
        return { ...state, [action.picId]: [action.comment] };
      } else
        return {
          ...state,
          [action.picId]: [...state[action.picId], action.comment]
        };
    default:
      return state;
  }
}

function pics(state = dataset, action) {
  // console.log(action.index);
  switch (action.type) {
    case "REMOVE_PIC":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case "ADD_PIC":
      return [...state, action.pic];

    default:
      return state;
  }
}

const rootReducer = combineReducers({ pics, comments });
export default rootReducer;
