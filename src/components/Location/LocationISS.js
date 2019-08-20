import React, { Component} from 'react';
import {connect} from "react-redux"
import {locationISSStyle} from './locationISSStyle.js';

function mapStateToProps(state){
  return {
    lat: parseFloat(state.coordinates.latitude),
    lng: parseFloat(state.coordinates.longitude)
  }
}

class ConnectedLocationISS extends Component {

  render() {
    return (
       <div style={locationISSStyle}>ISS</div>
    );
  }
}

const LocationISS = connect(mapStateToProps)(ConnectedLocationISS)
export default LocationISS