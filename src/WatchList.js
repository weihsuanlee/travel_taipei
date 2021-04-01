import { useEffect, useState, useContext } from 'react'
import Banner from './components/Banner'
import { withRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import { WatchListContext } from './WatchListContext'
import SkeletonList from './components/SkeletonList'
import Card from './components/Card'
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone'
import './WatchList.scss'
import LocationCityIcon from '@material-ui/icons/LocationCity'

function WatchList(props) {
  const [isLoading, setIsLoading] = useState(true)
  const { watchList } = useContext(WatchListContext)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1200)
  }, [watchList])

  return (
    <Container maxWidth={false} className="attractions-list-container">
      <Banner Icon={FavoriteRoundedIcon} title="收藏景點" isWatchList />
      <div
        onClick={() => {
          props.history.push('/')
        }}
        className="to-list-btn"
      >
        <KeyboardBackspaceSharpIcon />
      </div>
      {isLoading ? (
        <SkeletonList />
      ) : (
        <>
          <div className="attractions-list">
            {watchList.length > 0 ? (
              <>
                {watchList.map((attraction) => (
                  <Card key={attraction.id} attraction={attraction} />
                ))}
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
              </>
            ) : (
              <div className="empty-list">
                <p>目前沒有收藏</p>
                <div className="t-rex">
                  <FavoriteTwoToneIcon />
                  <img src="../../images/noresult.png" alt="no-result" />
                  <LocationCityIcon className="no-spot" />
                </div>
                <div
                  onClick={() => {
                    props.history.push('/')
                  }}
                  className="go-to-button"
                >
                  連結至列表頁
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </Container>
  )
}

export default withRouter(WatchList)
