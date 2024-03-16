import type { Moment } from "moment";

export interface StationState {
  coordinates: {
    longitude: number;
    latitude: number;
  };
  crew: [];
  date: Moment;
}
