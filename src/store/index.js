import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { flightReducer } from "./flightsSlice";

const rootReducer = combineReducers({
  flights: flightReducer
});

export const store  = configureStore({
  reducer: rootReducer,
});