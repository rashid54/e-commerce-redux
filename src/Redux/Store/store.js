import { applyMiddleware, createStore } from "redux";
import rootReducer from "../Reducers/rootReducer";
import thunkMiddleware from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
    key : 'rootReducer',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = applyMiddleware(thunkMiddleware);
const store = createStore(persistedReducer, enhancer);

export const persistor = persistStore(store);
export default store;
