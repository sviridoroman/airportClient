import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { flightReducer } from "./flightsSlice";
import { airportReducer } from "./airportSlice";

const rootReducer = combineReducers({
  airports: airportReducer,
  flights: flightReducer,
});

export const store  = configureStore({
  reducer: rootReducer,
});