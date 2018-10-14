import { createStore } from "redux";

const initialState = {
  list: [
    {
      name: "borða",
      done: false,
      key: 1
    },
    {
      name: "sofa",
      done: false,
      key: 2
    },
    {
      name: "myrða jón",
      done: false,
      key: 3
    },
    {
      name: "búa til hús",
      done: false,
      key: 4
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, list: list.push(action.payload.obj) };
    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
