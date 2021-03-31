import { useEffect, useState } from 'react'
import Banner from './components/Banner'
import ImageSlider from './components/ImageSlider'
import Features from './components/Features'
import DetailInfo from './components/DetailInfo'
import Location from './components/Location'
import Direction from './components/Direction'
import Recommendations from './components/Recommendations'
import { withRouter, useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import './AttractionDetail.scss'
import { useSelector } from 'react-redux'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'
import { selectAllAttractions } from './features/attractionsSlice'

function AttractionDetail(props) {
  const [spot, setSpot] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()
  const attractions = useSelector(selectAllAttractions)
  console.log(id)
  let idNotFound = true
  useEffect(() => {
    setIsLoading(true)
    for (let i = 0; i < attractions.length; i++) {
      if (+attractions[i].id === +id) {
        console.log(attractions[i])
        idNotFound = false
        console.log(idNotFound)
        setSpot(attractions[i])
        setIsLoading(false)
        return false
      }
      if (i === attractions.length - 1 && idNotFound) {
        console.log('notfound')
        props.history.push('/')
      }
    }
  }, [id, attractions])

  return (
    <>
      {isLoading ? (
        '123'
      ) : (
        <Container maxWidth={false} className="attractions-list-container">
          <Banner Icon={LocationOnRoundedIcon} bannerInfo={spot} />
          <div
            onClick={() => {
              props.history.push('/')
            }}
            className="to-list-btn"
          >
            <KeyboardBackspaceSharpIcon />
            <span>回列表</span>
          </div>
          <div className="detail-flex">
            <div className="detail-left">
              <ImageSlider images={spot.images} />
              <Features
                targets={spot.target}
                categories={spot.category}
                services={spot.service}
                friendly={spot.friendly}
              />
              <DetailInfo attraction={spot} />
            </div>
            <div className="detail-right">
              <Location attraction={spot} />
              <Direction attraction={spot} />
              <Recommendations attraction={spot} />
            </div>
          </div>
        </Container>
      )}
    </>
  )
}

export default withRouter(AttractionDetail)
