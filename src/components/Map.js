import React from 'react'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import './Map.scss'
import 'leaflet/dist/leaflet.css'

function Map(props) {
  const { attractions } = props
  const showSpot = (attractions) => {
    attractions.map((attraction) => (
      <Marker
        key={attraction.id}
        position={[attraction.nlat, attraction.elong]}
      >
        <Popup>
          <div className="info">{attraction.name}</div>
        </Popup>
      </Marker>
    ))
  }

  // const showSpot = () => {
  //   return (
  //     <Marker position={[25.04132, 121.51516]}>
  //       <Popup>
  //         A pretty CSS3 popup. <br /> Easily customizable.
  //       </Popup>
  //     </Marker>
  //   )
  // }

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
      {showSpot(attractions)}
    </MapContainer>
  )
}

export default Map
