import React, { Component } from 'react';
import './App.css';
import LocationPanel from "./components/LocationPanel/LocationPanel"
import Map from "./components/Map/Map"
import CrewISS from "./components/CrewISS/CrewISS"
import { connect } from "react-redux"
import { updateCoordinates, updateCrew, updateDate } from "./actions/index"
import TimeBox from "./components/TimeBox/TimeBox";
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
    let timer = setInterval(() => {
      this.props.updateCoordinates()
      this.props.updateCrew()
      this.props.updateDate(moment().utc())
    }, 5000)
    this.setState({ timer })
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  render() {
    return (
      <div className="grid-block">
        <Row gutter={16}>
          <Col span={18}><LocationPanel /></Col>
          <Col span={6}><TimeBox /></Col>
        </Row>
        <Row gutter={16} style={{ matginTop: 20 }} >
          <Col span={18}><Map /></Col>
          <Col span={6}><CrewISS /></Col>
        </Row>
      </div>
    )
  }
}

const App = connect(null, { updateCoordinates, updateCrew, updateDate })(ConnectedApp)
export default App;
