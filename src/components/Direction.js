import './Direction.scss'
function Direction(props) {
  const { attraction } = props
  return (
    <>
      <div className="direction">
        <h4>地址：</h4>
        <h4>{attraction.address}</h4>
        <h4>{attraction.open_time}</h4>
      </div>
    </>
  )
}

export default Direction
