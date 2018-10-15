import { createStore } from "redux";

const initialState = [
  {
    name: "magnús",
    done: false
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return [
        ...state,
        { name: action.payload.name, done: action.payload.done }
      ];
    case "UPDATE_SWITCH":
      return state.map(obj => {
        if (obj.name === action.payload.name) {
          obj.done = action.payload.done;
        }
        return obj;
      });
    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
