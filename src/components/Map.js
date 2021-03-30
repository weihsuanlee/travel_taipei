import React from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  Popup,
  Marker,
  Tooltip,
} from 'react-leaflet'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded'
import './Map.scss'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { withRouter } from 'react-router-dom'

function Map(props) {
  let myIcon = L.icon({
    iconUrl: '../../images/icon.png',
    iconSize: [24, 24],
    popupAnchor: [0, 0],
  })

  L.Marker.prototype.options.icon = myIcon
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
            <Tooltip
              direction="top"
              offset={[0, -5]}
              className="tooltip"
              permanent
            >
              <img
                className="tooltip-image"
                src={
                  attraction.images[0]
                    ? attraction.images[0].src
                    : '../../images/notfound.jpeg'
                }
                alt=""
              />
            </Tooltip>
            <Popup className="popup" closeButton={false} direction="top">
              <div className="popup-info">
                {attraction.name.split('_').join(' ')}
              </div>
              <div className="popup-image">
                <img
                  src={
                    attraction.images[0]
                      ? attraction.images[0].src
                      : '../../images/notfound.jpeg'
                  }
                  alt=""
                />
              </div>
              <p className="popup-address">
                <LocationOnRoundedIcon />
                <span>{attraction.address}</span>
              </p>
              {attraction.tel ? (
                <p className="popup-address">
                  <PhoneRoundedIcon />
                  <span>{attraction.tel}</span>
                </p>
              ) : (
                ''
              )}
              <div
                className="popup-link"
                onClick={() => {
                  props.history.push('/' + attraction.id)
                }}
              >
                詳細內容
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
}

export default withRouter(Map)
