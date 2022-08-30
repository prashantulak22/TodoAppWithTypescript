import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
// import isLogged from "./reducers/authReducer";
import authReducer from "./reducers/authReducer";

const persistConfig = {
      key: "root",
      storage,
      whiteList: [' authReducer']
}

const rootReducer = combineReducers({
      authReducer: persistReducer(persistConfig, authReducer)
})
const store = createStore(rootReducer );

const persistor = persistStore(store);

export { store, persistor }