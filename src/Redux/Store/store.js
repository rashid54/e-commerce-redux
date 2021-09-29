import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(rootReducer, enhancer);

export default store;