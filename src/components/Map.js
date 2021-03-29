import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './Map.scss'

function Map() {
  return (
    <MapContainer
      className="map"
      scrollWheelZoom={true}
      center={[25.04132, 121.51516]}
      zoom={17}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map
