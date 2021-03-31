import './DetailInfo.scss'
function DetailInfo(props) {
  const { attraction } = props
  return (
    <>
      <div className="detail-info">
        {attraction.introduction && (
          <>
            <div className="detail-info-title">詳細資訊</div>
            <div className="detail-intro">
              <p>{attraction.introduction}</p>
            </div>
          </>
        )}
        {attraction.remind && (
          <>
            <div className="detail-info-title">備註</div>
            <div className="detail-intro">
              <p>{attraction.remind ? attraction.remind : ''}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default DetailInfo
