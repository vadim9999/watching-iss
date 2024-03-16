import React from 'react';
import type { Props } from './LocationISS.types.js';
import { locationISSStyle } from './locationISSStyle';

const LocationISS = ({ }: Props) => {

  return (
    <div style={locationISSStyle as any}>ISS</div>
  )
}

export default LocationISS
