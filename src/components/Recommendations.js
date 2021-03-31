import { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/requests'
import './Recommendations.scss'
import { withRouter } from 'react-router-dom'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'

function Recommendations(props) {
  const { attraction } = props
  const [recommendations, setRecommendations] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchAllAttractions, {
        params: {
          nlat: attraction.nlat,
          elong: attraction.elong,
        },
      })
      // console.log(response.data.data)
      setRecommendations(response.data.data.slice(1, 5))
      return response
    }
    fetchData()
  }, [attraction])
  return (
    <>
      {recommendations.length > 0 && (
        <div className="recommendations">
          <div className="recommendation-title">週邊景點</div>
          {recommendations.map((recommendation) => (
            <div
              key={recommendation.id}
              className="recommendation"
              onClick={() => {
                props.history.push('/' + recommendation.id)
              }}
            >
              <img
                className="recommendation-image"
                src={
                  recommendation.images[0]
                    ? recommendation.images[0].src
                    : '../../images/notfound.jpeg'
                }
                alt=""
              />
              <div className="recommendation-align">
                <p>{recommendation.name}</p>
                <p className="recommendation-address">
                  <LocationOnRoundedIcon />
                  <span>{recommendation.address}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default withRouter(Recommendations)
