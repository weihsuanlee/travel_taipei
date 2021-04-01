import Skeleton from '@material-ui/lab/Skeleton'
import Container from '@material-ui/core/Container'
import './SkeletonDetail.scss'
import { withRouter } from 'react-router-dom'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'

function SkeletonDetail(props) {
  return (
    <Container maxWidth={false} className="attractions-list-container">
      <div
        onClick={() => {
          props.history.push('/')
        }}
        className="to-list-btn"
      >
        <KeyboardBackspaceSharpIcon />
      </div>
      <Skeleton variant="rect" height={'70vh'} className="skeleton-banner" />

      <div className="detail-flex">
        <div className="detail-left">
          <Skeleton
            variant="rect"
            width={'100%'}
            height={360}
            className="skeleton-section"
          />
          <div className="skeleton-flex">
            <Skeleton
              variant="rect"
              height={32}
              width={80}
              className="skeleton-tags"
            />
            <Skeleton
              variant="rect"
              height={32}
              width={80}
              className="skeleton-tags"
            />
            <Skeleton
              variant="rect"
              height={32}
              width={74}
              className="skeleton-tags"
            />
          </div>
          <div className="skeleton-flex">
            <Skeleton
              variant="rect"
              height={32}
              width={72}
              className="skeleton-tags"
            />
            <Skeleton
              variant="rect"
              height={32}
              width={72}
              className="skeleton-tags"
            />
            <Skeleton
              variant="rect"
              height={32}
              width={72}
              className="skeleton-tags"
            />
            <Skeleton
              variant="rect"
              height={32}
              width={76}
              className="skeleton-tags"
            />
            <Skeleton
              variant="rect"
              height={32}
              width={141}
              className="skeleton-tags"
            />
          </div>
          <Skeleton
            variant="rect"
            width={'100%'}
            height={120}
            className="skeleton-section skeleton-intro"
          />
          <Skeleton
            variant="rect"
            width={'100%'}
            height={220}
            className="skeleton-section skeleton-intro"
          />
        </div>
        <div className="detail-right">
          <Skeleton
            variant="rect"
            width={'100%'}
            height={360}
            className="skeleton-location"
          />
          <Skeleton
            variant="rect"
            width={'100%'}
            height={280}
            className="skeleton-section skeleton-intro"
          />
          <Skeleton
            variant="rect"
            width={'100%'}
            height={434}
            className="skeleton-section skeleton-intro"
          />
        </div>
      </div>
    </Container>
  )
}

export default withRouter(SkeletonDetail)
