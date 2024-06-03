import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AirportService from "../components/airport/AirportService";

const initialState = {
  airports: []
}

export const fetchAirports = createAsyncThunk(
  'airports/getAll',
  async () => {
    const responce = await AirportService.getAllAirports();
    return responce;
  }
);

export const getAirportById = createAsyncThunk(
  'airports/getById',
  async (airportId) => {
    const responce = await AirportService.getAirport(airportId);
    return responce;
  }
);

export const createAirport = createAsyncThunk(
  'airports/create',
  async (airport) => {
    const responce = await AirportService.postAirport(airport);
    return responce;
  }
);

export const deleteAirport = createAsyncThunk(
  'airports/deleteById',
  async (airportId) => {
    await AirportService.deleteAirport(airportId);
    return airportId;
  }
);

export const editAirport = createAsyncThunk(
  'airports/editById',
  async (airport) => {
    const responce = await AirportService.putAirport(airport.id, airport);
    return responce;
  }
);

const airportsSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAirport.fulfilled, (state, action) => {
        state.airports.push(action.payload)
      })
      .addCase(fetchAirports.fulfilled, (state, action) => {
        state.airports = action.payload;
      })
      .addCase(deleteAirport.fulfilled, (state, action) => {
        state.airports = state.airports.filter(
          (airport) => airport.id !== action.payload
        );
      })
      .addCase(editAirport.fulfilled, (state, action) => {
        const index = state.airports.findIndex(airport => airport.id === action.payload.id);
        state.airports[index] = action.payload;
      })
  }
});

export const airportReducer = airportsSlice.reducer;