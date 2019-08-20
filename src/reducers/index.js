import { COORDINATES_LOADED, CREW_LOADED, UPDATE_DATE, 
    API_GET_COORDINATES_ERRORED, 
    API_GET_CREW_ERRORED  } from "../constants/action-types"

import moment from "moment"

const initialState = {
    coordinates: {
        longitude: 0,
        latitude: 0
    },
    crew: [],
    date: moment().utc()

}

function rootReducer(state = initialState, action) {
    
    switch (action.type) {
        case COORDINATES_LOADED:

            return {
                ...state,
                coordinates: action.payload
            }
            

        case CREW_LOADED:

            return Object.assign({}, state, {
                crew: action.payload
            })

        case UPDATE_DATE:

            return Object.assign({}, state, {
                date: action.payload
            })

        case API_GET_CREW_ERRORED:

            console.log("Error while getting crew from server");
            return state;

        case API_GET_COORDINATES_ERRORED:

            console.log("Error while getting coordinates from server");
            return state
            
        default:
            return state;
            
    }
}

export default rootReducer;
