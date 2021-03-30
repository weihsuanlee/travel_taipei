import Banner from './components/Banner'
import { withRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'

function WatchList(props) {
  return (
    <Container maxWidth={false} className="attractions-list-container">
      <Banner Icon={FavoriteRoundedIcon} title="收藏清單" />
      <div
        onClick={() => {
          props.history.push('/')
        }}
        className="to-list-btn"
      >
        <KeyboardBackspaceSharpIcon />
        <span>回列表</span>
      </div>
    </Container>
  )
}

export default withRouter(WatchList)
