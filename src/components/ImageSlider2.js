import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
}))

function ImageSlider(props) {
  const classes = useStyles()
  const { images } = props

  return (
    <>
      {images.length > 0 && (
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5} cellHeight={300}>
            {images.map((image, i) => (
              <GridListTile key={i}>
                <img src={image.src} alt="" />
              </GridListTile>
            ))}
          </GridList>
        </div>
      )}
    </>
  )
}

export default ImageSlider
