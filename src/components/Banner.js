import './Banner.scss'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'

function Banner(props) {
  const { title, bannerInfo, Icon } = props
  return (
    <>
      {/* bannerInfo 若存在 為景點詳細頁 使用景點資訊 */}
      {bannerInfo ? (
        <div
          className="banner"
          style={{
            backgroundImage:
              bannerInfo.images.length > 0
                ? `url('${bannerInfo.images[0].src}')`
                : `url(
                  '../../images/mountain.jpeg'
                )`,
          }}
        >
          <div className="banner-contents">
            <h1 className="banner-title">
              <Icon />
              {bannerInfo.name.split('_').join(' ')}
            </h1>
            <p className="location-address">
              <LocationOnRoundedIcon />
              <span>{bannerInfo.address}</span>
            </p>
          </div>
          <div className="banner-fade-bottom"></div>
        </div>
      ) : (
        <div className="banner">
          <div className="banner-contents">
            <h1 className="banner-title">
              <Icon />
              {title}
            </h1>
          </div>
          <div className="banner-fade-bottom"></div>
        </div>
      )}
    </>
  )
}

export default Banner
