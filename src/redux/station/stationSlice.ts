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
  date: moment().utc(),
};

const stationSlice = createSlice({
  name: "station",
  initialState,
  reducers: {
    setCoordinate: (
      state,
      action: PayloadAction<StationState["coordinates"]>,
    ) => {
      state.coordinates = action.payload;
    },
  },
});

export const { setCoordinate } = stationSlice.actions;

export default stationSlice.reducer;
