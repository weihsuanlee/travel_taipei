import { useEffect, useState } from 'react'
import axios from './api/axios'
import requests from './api/requests'
import Card from './components/Card'
import Map from './components/Map'
import Banner from './components/Banner'
import Category from './components/Category'
import 'leaflet/dist/leaflet.css'
import './AttractionsList.scss'
import Container from '@material-ui/core/Container'

function AttractionsList({ attractions }) {
  const [category, setCategory] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchAllAttractions, {
        params: {
          categoryIds: 15,
        },
      })
      setCategory(response.data.data)
      console.log(response.data)
      return response
    }
    fetchData()
  }, [])
  return (
    <>
      <Container maxWidth="xl" className="attractions-list-container">
        <Banner />
        <Category />
        <div className="attractions-list">
          {attractions.map((attraction) => (
            <Card key={attraction.id} attraction={attraction} />
          ))}
        </div>
        <Map />
      </Container>
    </>
  )
}

export default AttractionsList
