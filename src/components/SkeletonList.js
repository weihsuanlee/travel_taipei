import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Skeleton from '@material-ui/lab/Skeleton'
import './SkeletonList.scss'

const useStyles = makeStyles((theme) => ({
  body: {
    padding: '16px',
  },
}))

function SkeletionList() {
  const classes = useStyles()
  let list = []
  for (let i = 0; i < 30; i++) {
    list.push(
      <Card className="skeleton-attraction-card" key={i}>
        <Skeleton animation="wave" variant="rect" className="card-image" />
        <CardContent className={classes.body}>
          <Skeleton
            animation="wave"
            height={14}
            width="60%"
            style={{ marginBottom: 6 }}
          />
          <Skeleton animation="wave" height={12} width="80%" />
        </CardContent>
      </Card>
    )
  }
  return (
    <>
      <div className="skeleton-cards-container">
        {list}
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
        <i aria-hidden="true"></i>
      </div>
      <Skeleton variant="rect" height={500} className="skeleton-map" />
    </>
  )
}

export default SkeletionList
