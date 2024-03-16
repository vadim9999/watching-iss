import type { Crew } from "../../api/api.types";

export interface StationState {
  coordinates: {
    longitude: number;
    latitude: number;
  };
  crew: Crew[];
  date: string;
}
