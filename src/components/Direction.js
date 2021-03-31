import './Direction.scss'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkIcon from '@material-ui/icons/Link'

function Direction(props) {
  const { attraction } = props
  return (
    <>
      <div className="direction">
        <div className="direction-align">
          <p className="direction-address">
            <LocationOnRoundedIcon />
            <span>{attraction.address}</span>
          </p>
          {attraction.tel && (
            <p className="direction-address">
              <PhoneRoundedIcon />
              <span>{attraction.tel}</span>
            </p>
          )}
        </div>
        {attraction.open_time && (
          <div className="open-hours">
            <div className="direction-title">開放時間</div>
            <span>{attraction.open_time}</span>
          </div>
        )}
        {attraction.ticket && (
          <div className="ticket-info">
            <div className="direction-title">門票資訊</div>
            <span>{attraction.ticket}</span>
          </div>
        )}
        {(attraction.official_site || attraction.facebook) && (
          <div className="official-link">
            <div className="direction-title">官方連結</div>

            {attraction.official_site && (
              <div
                className="direction-links"
                onClick={() => {
                  window.open(attraction.official_site, '_blank')
                }}
              >
                <LinkIcon className="direction-icon" />
                <span>官方網站</span>
              </div>
            )}
            {attraction.facebook && (
              <div
                className="direction-links"
                onClick={() => {
                  window.open(attraction.facebook, '_blank')
                }}
              >
                <FacebookIcon className="direction-icon" />
                <span>facebook</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Direction
