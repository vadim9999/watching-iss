import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationPanel from "./components/LocationPanel"
import Map from "./components/Map"
import CrewISS from "./components/CrewISS/CrewISS"
import { connect } from "react-redux"
import { updateCoordinates, updateCrew } from "./actions/index"

class ConnectedApp extends Component {
  constructor() {
    super()

    this.state = {
      timer: null,
      counter: 0,
    }
  }
  componentDidMount() {
    this.props.updateCoordinates()
    this.props.updateCrew()
    // let timer = setInterval(()=>{
    //   this.props.updateCoordinates()
    //   this.props.updateCrew()
    // }, 5000)
    // this.setState({timer})

  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }


  render() {
    return (
      <div>
        <LocationPanel />
        <Map />
        <CrewISS />
      </div>
    )
  }
}


const App = connect(null, {updateCoordinates, updateCrew})(ConnectedApp)
export default App;
