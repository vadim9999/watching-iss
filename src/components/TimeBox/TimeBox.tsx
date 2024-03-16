import React from 'react';
import "./style.css";
import { useAppSelector } from '../../redux/hooks/hooks';
import moment from 'moment';

const TimeBox = () => {
    const date = useAppSelector((state) => state.station.date);

    const time = moment(date).utc().format("HH:mm")
    const dateFormatted = moment(date).utc().format("dddd, D MMM YYYY")

    return (
        <div className="date-box">
            <p>
                <strong>{"Current UTC time: " + time}</strong> <br />
                <i>{dateFormatted}</i>
            </p>
        </div>
    )
}

export default TimeBox