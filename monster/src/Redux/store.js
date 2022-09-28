import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    // products: productReducer,
    // auth: authReducer,
  });
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));