import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationISS from "./Location/LocationISS"

import {connect} from "react-redux";

function mapStateToProps(state){
    return {
        coordinates: state.coordinates
    }
}
class ConnectedMap extends Component {
constructor(){
    super()
}
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    // zoom: 0
  };

  getCoordinates(coordinates){
      console.log("GEtCoordinates");
      console.log(parseFloat(coordinates.latitude));
      
    return {
        lat: parseFloat(coordinates.latitude),
        lng: parseFloat(coordinates.longitude)
    }
  }
  render() {
      const {latitude, longitude} = this.props.coordinates;
      console.log("lat long");
      console.log(latitude);
      console.log(longitude);
      
      
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '80%' }}>
        <GoogleMapReact
        center={this.getCoordinates(this.props.coordinates)}
          defaultCenter = {this.props.center}
          defaultZoom={4}
        >
          <LocationISS />
        </GoogleMapReact>
      </div>
    );
  }
}
const Map = connect(mapStateToProps)(ConnectedMap)
export default Map;