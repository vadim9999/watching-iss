import { takeLatest, call, put } from "redux-saga/effects";
import { UPDATE_COORDINATES, COORDINATES_LOADED, UPDATE_CREW, CREW_LOADED } from "../constants/action-types";
import axios from "axios"

export default function* watcherSaga() {
    yield takeLatest([UPDATE_COORDINATES], workerSagaGetCoordinates)
    yield takeLatest([UPDATE_CREW], workerSagaGetCrew)
}

function* workerSagaGetCoordinates(action) {
    try {
        const payload = yield call(getCoordinates, action.payload)
        yield put({ type: COORDINATES_LOADED, payload })
    } catch (e) {
        yield put({ type: "API_GET_COORDINATES_ERRORED", payload: e })
    }

}

function* workerSagaGetCrew(action) {
    try {
        const payload = yield call(getCrew, action.payload)
        yield put({ type: CREW_LOADED, payload })
    } catch (e) {
        yield put({ type: "API_GET_CREW_ERRORED", payload: e })
    }
}

function getCrew() {
    return axios.get('http://api.open-notify.org/astros.json')
        .then(function (response) {
            let people = response.data.people;
            const result = people.filter(man => man.craft === "ISS")
            return result
        })
}

function getCoordinates() {
    return axios.get('http://api.open-notify.org/iss-now.json')
        .then(function (response) {
            return response.data.iss_position
        })
}