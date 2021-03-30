import { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/requests'
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
      setRecommendations(response.data.data.slice(0, 7))
      return response
    }
    fetchData()
  }, [attraction])
  return (
    <div>
      {recommendations.map((recommendation) => (
        <p key={recommendation.id}>{recommendation.name}</p>
      ))}
    </div>
  )
}

export default Recommendations
