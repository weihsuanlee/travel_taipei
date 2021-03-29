import React from 'react'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

function Map(props) {
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  })

  L.Marker.prototype.options.icon = DefaultIcon
  const { attractions } = props

  return (
    <>
      <MapContainer
        className="map"
        scrollWheelZoom={true}
        center={[25.06, 121.55]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {attractions.map((attraction) => (
          <Marker
            key={attraction.id}
            position={[attraction.nlat, attraction.elong]}
          >
            <Popup>
              <div className="info">{attraction.name}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default Map
