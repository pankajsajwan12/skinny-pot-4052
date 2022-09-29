import { legacy_createStore,combineReducers ,applyMiddleware,compose} from 'redux'
import {reducer as AppReducer} from './AppReducer/reducer'
import thunk from "redux-thunk";

const composeEnhancers = process.env.NODE_ENV !== "production" &&
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const rootReducer = combineReducers({AppReducer})
export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))