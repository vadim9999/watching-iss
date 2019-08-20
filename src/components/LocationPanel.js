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
        
        return(<div>
            {this.getCoordinates(this.props.coordinates)}
        </div>)
        
    }
}

const LocationPanel = connect(mapStateToProps)(ConnectedLocationPanel)
export default LocationPanel