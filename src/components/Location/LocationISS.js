import React, { Component} from 'react';
import PropTypes from "prop-types"
import shouldPureComponentUpdate from 'react-pure-render/function';
import {connect} from "react-redux"
import {locationISSStyle} from './locationISSStyle.js';

function mapStateToProps(state){
  return {
    lat: parseFloat(state.coordinates.latitude),
    lng: parseFloat(state.coordinates.longitude)
  }
}

class ConnectedLocationISS extends Component {
  // static propTypes = {
  //   text: PropTypes.string
  // };

  // static defaultProps = {};

  // shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
       <div style={locationISSStyle}>
          ISS
       </div>
    );
  }
}


const LocationISS = connect(mapStateToProps)(ConnectedLocationISS)
export default LocationISS