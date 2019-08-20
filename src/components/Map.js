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
    this.state={

    }
}
  static defaultProps = {
    
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
      
      const defaultCoordinates = {
        center: {
          lat: 0,
          lng: 0
        },
      }
    return (
      // Important! Always set the container height explicitly
      <div className="gutter-box-map" style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
        center={this.getCoordinates(this.props.coordinates)}
         
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