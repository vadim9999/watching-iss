import React, { Component } from 'react';
import { connect } from "react-redux";
import "./style.css"

function mapStateToProps(state) {
    return {
        coordinates: state.coordinates
    }
}

class ConnectedLocationPanel extends Component {
    
    render() {
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