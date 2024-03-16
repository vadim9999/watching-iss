import React from 'react';
import { useAppSelector } from '../../../redux/hooks/hooks.js';
import Marker from './Marker.js';
import type { Props } from './LocationISS.types.js';
import { locationISSStyle } from './locationISSStyle';

const LocationISS = ({ }: Props) => {

  return (
    <div style={locationISSStyle as any}>ISS</div>
  )
}

export default LocationISS
