import { createStore } from "redux";

const initialState = [];

updateList = (state, action) => {
  return [...state, { name: action.payload.name, done: action.payload.done }];
};
deleteList = (state, action) => {
  return state.filter(obj => {
    if (obj.name != action.payload.name) {
      return obj;
    }
  });
};
switchList = (state, action) => {
  return state.map(obj => {
    if (obj.name === action.payload.name) {
      obj.done = !action.payload.done;
    }
    return obj;
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LIST":
      return this.updateList(state, action);
    case "UPDATE_DELETE":
      return this.deleteList(state, action);
    case "UPDATE_SWITCH":
      return this.switchList(state, action);
    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
