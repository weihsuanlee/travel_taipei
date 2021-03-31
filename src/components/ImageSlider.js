import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './ImageSlider.scss'

function ImageSlider(props) {
  const { images } = props
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  // console.log(images)
  return (
    <div className="detail-slider-wrapper">
      {images?.length > 0 && (
        <Slider {...settings} className="detail-slider">
          {images.map((v, i) => (
            <div className="detail-slider-image" key={i}>
              <img src={v.src} alt="" />
            </div>
          ))}
        </Slider>
      )}
    </div>
  )
}

export default ImageSlider
