import React, { useEffect } from 'react';
import './App.css';
import Map from "./components/Map/Map"

import { Row, Col } from 'antd';
import LocationPanel from './components/LocationPanel/LocationPanel';
import TimeBox from './components/TimeBox/TimeBox';
import CrewISS from './components/CrewISS/CrewISS';
import { useAppDispatch } from './redux/hooks/hooks';
import { UPDATE_COORDINATES, UPDATE_CREW } from './constants/action-types';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: UPDATE_CREW })

    let timer = setInterval(() => {
      dispatch({ type: UPDATE_COORDINATES })
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