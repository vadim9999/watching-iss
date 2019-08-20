import { COORDINATES_LOADED, CREW_LOADED, UPDATE_DATE } from "../constants/action-types"
import moment from "moment"

const initialState = {
    coordinates: {
        longitude:0,
        latitude:0
    },
    crew:[],
    date: moment().utc()

}

function rootReducer(state = initialState, action) {
    console.log("Reducers_action");
    console.log(action);
    
    switch (action.type) {
        case COORDINATES_LOADED:
            console.log("Reducers_action_COORDINATES_LOADED");
            
            return {
                ...state,
                coordinates: action.payload
            }
            break;

        case CREW_LOADED: 
            console.log("Reducers_action_CREW_LOADED");
           return Object.assign({}, state, {
                crew: action.payload
            })

        case UPDATE_DATE:
            console.log("Reducer_UPDATE_TIME");
            return Object.assign({}, state, {
                date: action.payload
            })

        default:
            return state;
            break;
    }
}

export default rootReducer;
