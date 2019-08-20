import { COORDINATES_LOADED, CREW_LOADED } from "../constants/action-types"

const initialState = {
    coordinates: {
        longitude:0,
        latitude:0
    },
    crew:[]
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
            
        default:
            return state;
            break;
    }
}

export default rootReducer;
