import './Card.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'

function Card({ attraction }) {
  return (
    <div className="attraction-card">
      <div className="add-favorite-btn">
        <FavoriteBorderIcon />
      </div>
      <div className="card-image">
        <img src={attraction.images[0].src} alt="" />
      </div>
      <div className="card-body">
        <h5>{attraction.name}</h5>
        <p>
          <LocationOnRoundedIcon />
          <span>{attraction.address}</span>
        </p>
      </div>
    </div>
  )
}

export default Card
