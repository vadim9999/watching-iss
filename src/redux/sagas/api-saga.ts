import { takeLatest, call, put } from "redux-saga/effects";
import {
  UPDATE_COORDINATES,
  COORDINATES_LOADED,
  UPDATE_CREW,
  CREW_LOADED,
} from "../../constants/action-types";
import { getCrew, getPosition } from "../../api";
import { setCoordinates, setCrew } from "../station/stationSlice";
import moment from "moment";

function* workerSagaGetCoordinates() {
  try {
    // @ts-ignore
    const payload = yield call(getPosition);

    yield put(
      setCoordinates({
        coordinates: {
          latitude: Number(payload.latitude),
          longitude: Number(payload.longitude),
        },
        date: moment().utc().toISOString(),
      }),
    );
  } catch (e) {
    yield put({ type: "API_GET_COORDINATES_ERRORED", payload: e });
  }
}

function* workerSagaGetCrew() {
  try {
    // @ts-ignore
    const payload = yield call(getCrew);
    yield put(setCrew(payload));
  } catch (e) {
    yield put({ type: "API_GET_CREW_ERRORED", payload: e });
  }
}

export default function* watcherSaga() {
  yield takeLatest([UPDATE_COORDINATES], workerSagaGetCoordinates);
  yield takeLatest([UPDATE_CREW], workerSagaGetCrew);
}
