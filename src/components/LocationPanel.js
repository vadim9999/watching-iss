import React, { Component } from 'react';
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        coordinates: state.coordinates
    }
}
class ConnectedLocationPanel extends Component {
    constructor() {
        super()

    
    }

    

    getCoordinates(coordinates){
        if(coordinates != undefined) return (coordinates.longitude + "   = " + coordinates.latitude)
    }
    

    render() {
        console.log("LocationPanle__");
        
        console.log(this.props.coordinates);
        const {longitude, latitude} = this.props.coordinates;

        return(<div className="location-box" >
            <p><strong>ISS is now located at:</strong><br/>
            <i>{"longitude: " + longitude + ", latitude: " + latitude }</i>
            </p>
        </div>)
        
    }
}

const LocationPanel = connect(mapStateToProps)(ConnectedLocationPanel)
export default LocationPanel