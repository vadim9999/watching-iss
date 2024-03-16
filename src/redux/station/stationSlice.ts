import type { PayloadAction} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { StationState } from "./stationSlice.types";

const initialState: StationState = {
  coordinates: {
    longitude: 0,
    latitude: 0,
  },
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
