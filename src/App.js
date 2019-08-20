import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LocationPanel from "./components/LocationPanel"
import Map from "./components/Map"
import CrewISS from "./components/CrewISS/CrewISS"
import { connect } from "react-redux"
import { updateCoordinates, updateCrew, updateDate } from "./actions/index"
import TimeBox from "./components/TimeBox/TimeBox";
import { Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';

import moment from "moment"

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
    this.props.updateDate(moment().utc())
    let timer = setInterval(()=>{
      this.props.updateCoordinates()
      this.props.updateCrew()
      this.props.updateDate(moment().utc())
    }, 5000)
    this.setState({timer})

  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }


  render() {
    return (
      <div  className="grid-block">
        <Row gutter={16} >
          <Col className="location" span={18}  ><LocationPanel /></Col>
          <Col className="date" span={6}  > <TimeBox /></Col>
        </Row>
        <Row gutter={16} style={{matginTop:20}} >
          <Col span={18} className="map"><Map /></Col>
          <Col span={6} className="crew"><CrewISS /></Col>
        </Row>



      </div>
    )
  }
}


const App = connect(null, { updateCoordinates, updateCrew, updateDate })(ConnectedApp)
export default App;
