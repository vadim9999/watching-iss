import React, { useEffect } from 'react';
import './App.css';
import Map from "./components/Map/Map"

import { Row, Col } from 'antd';
import LocationPanel from './components/LocationPanel/LocationPanel';
import TimeBox from './components/TimeBox/TimeBox';
import CrewISS from './components/CrewISS/CrewISS';
import { getCrew, getPosition } from './api';
import { useAppDispatch } from './redux/hooks/hooks';
import { setCoordinates, setCrew } from './redux/station/stationSlice';
import moment from 'moment';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getCrew().then((data) => {
      dispatch(setCrew(data))
    });


    let timer = setInterval(() => {
      getPosition().then((response) => {

        dispatch(setCoordinates({ coordinates: { latitude: Number(response.latitude), longitude: Number(response.longitude) }, date: moment().utc().toISOString() }))
      })

    }, 5000)

    return () => {
      clearInterval(timer);
    }

  }, [])

  return (
    <div className="grid-block">
      <Row gutter={16}>
        <Col span={18}><LocationPanel /></Col>
        <Col span={6}><TimeBox /></Col>
      </Row>
      <Row gutter={16} >
        <Col span={18}><Map /></Col>
        <Col span={6}><CrewISS /></Col>
      </Row>
    </div>
  )
}

export default App;