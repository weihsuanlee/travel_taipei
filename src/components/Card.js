import { useContext } from 'react'
import './Card.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import { withRouter, Link } from 'react-router-dom'
import { WatchListContext } from '../WatchListContext'

function Card(props) {
  const { addSpot, watchList } = useContext(WatchListContext)
  const { attraction } = props
  const index = watchList.findIndex((item) => item.id === attraction.id)
  return (
    <Link className="attraction-card" to={`/${attraction.id}`}>
      <div
        className="add-favorite-btn"
        onClick={(e) => {
          e.preventDefault()
          addSpot(attraction)
        }}
      >
        {index === -1 ? (
          <FavoriteBorderIcon />
        ) : (
          <FavoriteRoundedIcon className="pink-heart" />
        )}
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
    </Link>
  )
}

export default withRouter(Card)
