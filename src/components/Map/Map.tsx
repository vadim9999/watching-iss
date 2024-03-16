import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationISS from "./Location/LocationISS"
import "./style.css"
import { useAppSelector } from '../../redux/hooks/hooks';


const Map = () => {
  const { latitude, longitude } = useAppSelector((state) => state.station.coordinates);

  const coordinates = {
    lat: parseFloat(String(latitude)),
    lng: parseFloat(String(longitude))
  }
  console.log("coordinates", coordinates);

  const defaultCenter = {
    lat: 0,
    lng: 0
  }
  return (
    <div className="box-map" >
      <GoogleMapReact
        defaultCenter={defaultCenter}
        center={coordinates}
        defaultZoom={4}
      >
        <LocationISS lat={coordinates.lat} lng={coordinates.lng} />
      </GoogleMapReact>
    </div>
  );

}

export default Map
