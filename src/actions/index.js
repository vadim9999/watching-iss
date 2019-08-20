
export function updateCoordinates() {
    return {
        type: "UPDATE_COORDINATES"
    }
}

export function updateCrew(){
    return {
        type: "UPDATE_CREW"
    }
}

export function updateDate(payload){
    return {
        type: "UPDATE_DATE",
        payload
    }
}