import { useEffect, useState } from 'react'
import axios from './api/axios'
import requests from './api/requests'
import { withRouter, useParams } from 'react-router-dom'
import './AttractionDetail.scss'

function AttractionDetail(props) {
  const [spot, setSpot] = useState([])
  const { attractions, setAttractions } = props
  const { id } = useParams()
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchAllAttractions)
      setAttractions(response.data.data)
      return response
    }
    fetchData()
    const index = attractions.findIndex((el) => el.id === 1554)
    //   console.log(attractions[0])
    if (index > -1) {
      setSpot(attractions[index])
    }
    console.log(index)
    console.log(spot)
  }, [])

  return (
    <div>
      {/* {spot.map((attraction) => (
        <div key={attraction.id}>{attraction.name}</div>
      ))} */}
    </div>
  )
}

export default withRouter(AttractionDetail)
