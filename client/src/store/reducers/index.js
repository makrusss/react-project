import categoriesReducer from "./categoryReducer";
import itemsReducer from "./itemReducer";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  users: userReducer,
  loading: loadingReducer,
});

export default rootReducer;