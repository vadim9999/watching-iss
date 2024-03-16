import React from 'react'
import type { Props } from './Marker.types'
import { locationISSStyle } from './locationISSStyle'

const Marker = ({ }: Props) => {
    return (
        <div style={locationISSStyle as any}>ISS</div>
    )
}

export default Marker