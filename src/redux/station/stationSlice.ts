import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { StationState } from "./stationSlice.types";
import moment from "moment";

const initialState: StationState = {
  coordinates: {
    longitude: 0,
    latitude: 0,
  },
  crew: [],
  date: moment().utc().toISOString(),
};

const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    setCrew: (state, action: PayloadAction<StationState["crew"]>) => {
      state.crew = action.payload;
    },
    setCoordinates: (
      state,
      action: PayloadAction<Pick<StationState, "coordinates" | "date">>,
    ) => {
      state.coordinates = action.payload.coordinates;
      state.date = action.payload.date;
    },
  },
});

export const { setCrew, setCoordinates } = stationSlice.actions;

export default stationSlice.reducer;
