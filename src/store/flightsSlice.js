import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FligtService from "../components/flight/FlightService";

const initialState = {
  flights: []
}

export const fetchFLights = createAsyncThunk(
  'flights/getAll',
  async () => {
    const responce = await FligtService.getAllFlights();
    return responce;
  }
);

export const getFlightById = createAsyncThunk(
  'flights/getById',
  async (flightId) => {
    const responce = await FligtService.getFlight(flightId);
    console.log(responce);
    return responce;
  }
);

export const createFlight = createAsyncThunk(
  'flights/create',
  async (airport) => {
    const responce = await FligtService.postFlight(airport);
    return responce;
  }
);

export const deleteFlight = createAsyncThunk(
  'flights/deleteById',
  async (airportId) => {
    await FligtService.deleteFlight(airportId);
    return airportId;
  }
);

export const editFlight = createAsyncThunk(
  'flights/editById',
  async (airport) => {
    const responce = await FligtService.putFlight(airport.id, airport);
    return responce;
  }
);

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFlight.fulfilled, (state, action) => {
        state.flights.push(action.payload)
      })
      .addCase(fetchFLights.fulfilled, (state, action) => {
        state.flights = action.payload;
      })
      .addCase(deleteFlight.fulfilled, (state, action) => {
        state.flights = state.flights.filter(
          (flight) => flight.id !== action.payload
        );
      })
      .addCase(editFlight.fulfilled, (state, action) => {
        const index = state.flights.findIndex(flight => flight.id === action.payload.id);
        state.flights[index] = action.payload;
      })
  }
});

export const flightReducer = flightsSlice.reducer;