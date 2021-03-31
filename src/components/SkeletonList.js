import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 264,
    margin: '0 8px',
    borderRadius: '10px',
    marginBottom: '32px',
    boxShadow: 'none',
  },
  media: {
    height: 160,
  },
  body: {
    padding: '16px',
  },
}))

function SkeletionList() {
  const classes = useStyles()
  let list = []
  for (let i = 0; i < 30; i++) {
    list.push(
      <Card className={classes.card} key={i}>
        <Skeleton animation="wave" variant="rect" className={classes.media} />
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
  return <>{list}</>
}

export default SkeletionList
