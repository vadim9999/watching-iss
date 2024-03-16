import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "../station/stationSlice";
// import rootReducer from "../reducers/index";
// import createSagaMiddleware from "redux-saga";
// import apiSaga from "../sagas/api-saga";

// const initialiseSagaMiddleware = createSagaMiddleware();
// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: { station: stationReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// const store = createStore(
//   rootReducer,
//   storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
// );

// initialiseSagaMiddleware.run(apiSaga);

// export default store;
