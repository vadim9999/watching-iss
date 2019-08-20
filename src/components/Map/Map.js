import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationISS from "../Location/LocationISS"
import { connect } from "react-redux";
import "./style.css"

function mapStateToProps(state) {
  return {
    coordinates: state.coordinates
  }
}

class ConnectedMap extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const { latitude, longitude } = this.props.coordinates;

    const coordinates = {
      lat: parseFloat(latitude),
      lng: parseFloat(longitude)
    }

    return (
      <div className="box-map" >
        <GoogleMapReact
          center={coordinates}
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