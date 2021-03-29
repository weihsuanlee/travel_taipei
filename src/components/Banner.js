import React from 'react'
import './Banner.scss'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'

function Banner() {
  return (
    <div className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">
          <LocationOnRoundedIcon />
          Taipei
        </h1>
      </div>
      <div className="banner-fade-bottom"></div>
    </div>
  )
}

export default Banner
