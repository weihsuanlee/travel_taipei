import './Card.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import { withRouter } from 'react-router-dom'

function Card(props) {
  const { attraction } = props
  return (
    <div
      className="attraction-card"
      onClick={() => {
        props.history.push('/' + attraction.id)
      }}
    >
      <div className="add-favorite-btn">
        <FavoriteBorderIcon />
      </div>
      <div className="card-image">
        <img
          src={
            attraction.images[0]
              ? attraction.images[0].src
              : '../../images/notfound.jpeg'
          }
          alt=""
        />
      </div>
      <div className="card-body">
        <h5>{attraction.name.split('_').join(' ')}</h5>
        <p>
          <LocationOnRoundedIcon />
          <span>{attraction.address}</span>
        </p>
      </div>
    </div>
  )
}

export default withRouter(Card)
