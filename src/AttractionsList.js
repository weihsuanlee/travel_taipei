import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { selectCategory, selectPage } from './features/attractionsSlice'
import { useSelector } from 'react-redux'
import axios from './api/axios'
import requests from './api/requests'
import Card from './components/Card'
import Map from './components/Map'
import Banner from './components/Banner'
import Category from './components/Category'
import SkeletonList from './components/SkeletonList'
import BasicPagination from './components/BasicPagination'
import Container from '@material-ui/core/Container'
import './AttractionsList.scss'

function AttractionsList() {
  const [attractions, setAttractions] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const categoryId = useSelector(selectCategory)
  const page = useSelector(selectPage)

  useEffect(() => {
    setIsLoading(true)
    async function fetchData() {
      const response = await axios.get(requests.fetchAllAttractions, {
        params: {
          page: page,
          categoryIds: categoryId,
        },
      })
      setAttractions(response.data.data)
      setTotalPage(Math.ceil(response.data.total / 30))
      console.log(response.data)
      console.log(response.data)
      return response
    }
    fetchData()
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [page, categoryId])

  return (
    <>
      <Container maxWidth={false} className="attractions-list-container">
        <Banner />
        <Category />
        <div className="attractions-list">
          {isLoading ? (
            <SkeletonList />
          ) : (
            <>
              {attractions.map((attraction) => (
                <Card key={attraction.id} attraction={attraction} />
              ))}
            </>
          )}
        </div>
        <BasicPagination totalPage={totalPage} />
        <Map attractions={attractions} />
      </Container>
    </>
  )
}

export default withRouter(AttractionsList)
