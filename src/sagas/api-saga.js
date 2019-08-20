import { takeLatest, call, put } from "redux-saga/effects";
import { UPDATE_COORDINATES, COORDINATES_LOADED, UPDATE_CREW, CREW_LOADED } from "../constants/action-types";
import axios from "axios"

export default function* watcherSaga() {
    yield takeLatest([UPDATE_COORDINATES], workerSagaGetCoordinates)
    yield takeLatest([UPDATE_CREW], workerSagaGetCrew)
}

function* allWorkers(action) {
    switch (action.type) {
        case UPDATE_COORDINATES:
            yield workerSagaGetCoordinates(action)
            break;

        case UPDATE_CREW:
            yield workerSagaGetCrew(action)
            break;

        default:
            break;
    }
}

function* workerSagaGetCoordinates(action) {
    const payload = yield call(getCoordinates, action.payload)
    yield put({ type: COORDINATES_LOADED, payload })
}

function* workerSagaGetCrew(action){
    const payload = yield call(getCrew, action.payload)
    console.log("WORKERSAGA_Crew_loaded");
    console.log(payload);
    
    yield put({type: CREW_LOADED, payload})
}

function getCrew(){
    return axios.get('http://api.open-notify.org/astros.json')
        .then(function (response) {
            // handle success
            console.log(response.data.people);
            let people = response.data.people;

            const result = people.filter(man => man.craft === "ISS")
            console.log(result);
            
            return result
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

function getCoordinates() {
    console.log("SAGA_worker_getCoordinates");
    return axios.get('http://api.open-notify.org/iss-now.json')
        .then(function (response) {
            // handle success
            console.log(response.data.iss_position);
            return response.data.iss_position
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        
}