import React from 'react';
import "./style.css";
import { useAppSelector } from '../../redux/hooks/hooks';

const TimeBox = () => {
    const date = useAppSelector((state) => state.station.date);

    const time = date.format("HH:mm")
    const dateFormatted = date.format("dddd, D MMM YYYY")

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