import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "../station/stationSlice";
// import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/api-saga";

const sagaMiddleware = createSagaMiddleware();
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: { station: stationReducer },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
// );

sagaMiddleware.run(mySaga);

// export default store;
