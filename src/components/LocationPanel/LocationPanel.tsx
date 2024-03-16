import React from 'react';
import "./style.css"
import { useAppSelector } from '../../redux/hooks/hooks';

const LocationPanel = () => {
    const { longitude, latitude } = useAppSelector((state) => state.station.coordinates)
    // const dispatch = useAppDispatch();

    return (
        <div className="location-box" >
            <p>
                <strong>ISS is now located at:</strong><br />
                <i>{"longitude: " + longitude + ", latitude: " + latitude}</i>
            </p>
        </div>
    )
}

export default LocationPanel