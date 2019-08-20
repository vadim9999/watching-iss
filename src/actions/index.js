
export function updateCoordinates(payload) {
    console.log("Actions_updateCoordinates");
    
    return {
        type: "UPDATE_COORDINATES"
    }
}

export function updateCrew(){
    console.log("actions_updateCrew");
    
    return {
        type: "UPDATE_CREW"
    }
}
