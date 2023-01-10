import { applyMiddleware, legacy_createStore as createStore  } from "redux";
import thunk from "redux-thunk";

const initialState = {
  items: [],
  item: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "items/fetchItems":
      // console.log(`lewat store`)
      return { ...state, items: action.payload };
    case "item/fetchItem":
      return { ...state, item: action.payload };
    default:
      return state;
  }
}

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
