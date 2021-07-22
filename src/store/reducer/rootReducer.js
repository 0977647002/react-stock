import { combineReducers } from "redux";
import stockReducer from "./stockReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./authenticationReducer";

const reducer = combineReducers({
  stock: stockReducer,
  category: categoryReducer,
  authen: userReducer,
});

export default reducer;
