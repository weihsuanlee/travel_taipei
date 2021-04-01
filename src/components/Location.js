import { MapContainer, TileLayer, Marker, Tooltip, useMap } from 'react-leaflet'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded'
import './Location.scss'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { withRouter } from 'react-router-dom'

function Location(props) {
  let myIcon = L.icon({
    iconUrl: '../../images/icon.png',
    iconSize: [24, 24],
    popupAnchor: [0, 0],
  })
  L.Marker.prototype.options.icon = myIcon
  const { attraction } = props
  function ChangeView({ center, zoom }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
  }

  return (
    <>
      <MapContainer
        className="location"
        scrollWheelZoom={true}
        center={[attraction.nlat, attraction.elong]}
        zoom={17}
      >
        <ChangeView center={[attraction.nlat, attraction.elong]} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[attraction.nlat, attraction.elong]}>
          <Tooltip
            direction="top"
            offset={[0, -5]}
            className="location-tooltip"
            permanent
          >
            <div className="location-info">
              {attraction.name.split('_').join(' ')}
            </div>
            <div className="location-flex">
              <img
                className="location-image"
                src={
                  attraction?.images[0]
                    ? attraction.images[0].src
                    : '../../images/notfound.jpeg'
                }
                alt=""
              />
              <div className="location-align">
                <p className="location-address">
                  <LocationOnRoundedIcon />
                  <span>{attraction.address}</span>
                </p>
                {attraction.tel ? (
                  <p className="location-address">
                    <PhoneRoundedIcon />
                    <span>{attraction.tel}</span>
                  </p>
                ) : (
                  ''
                )}
              </div>
            </div>
          </Tooltip>
        </Marker>
      </MapContainer>
    </>
  )
}

export default withRouter(Location)
