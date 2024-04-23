import { configureStore } from "@reduxjs/toolkit";
import stationReducer from "../station/stationSlice";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/api-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { station: stationReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(mySaga);
