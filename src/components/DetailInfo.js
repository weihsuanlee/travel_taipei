import './DetailInfo.scss'
function DetailInfo(props) {
  const { attraction } = props
  return (
    <>
      <div className="detail-info">
        <h5>{attraction.introduction}</h5>
        <h5>{attraction.official_site}</h5>
        <h5>{attraction.facebook}</h5>
        <h5>{attraction.ticket}</h5>
        <h5>{attraction.remind}</h5>
      </div>
    </>
  )
}

export default DetailInfo
