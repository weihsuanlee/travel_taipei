import Chip from '@material-ui/core/Chip'
import './Features.scss'
import { useDispatch } from 'react-redux'
import { changeCateoryId, changePageNow } from '../features/attractionsSlice'
import { withRouter } from 'react-router-dom'

function Features(props) {
  const { targets, categories, services, friendly } = props
  const dispatch = useDispatch()

  const handleClick = (categoryId) => {
    dispatch(changeCateoryId(categoryId))
    dispatch(changePageNow(1))
    props.history.push('/')
  }
  return (
    <>
      {targets.length > 0 && (
        <div className="tags">
          {targets.map((target, i) => (
            <Chip key={i} label={`# ${target.name}`} className="tag" />
          ))}
        </div>
      )}
      {categories.length > 0 && (
        <div className="tags">
          {categories.map((category, i) => (
            <Chip
              key={i}
              label={category.name}
              className="tag category-tag"
              onClick={() => {
                handleClick(category.id)
              }}
            />
          ))}
        </div>
      )}
      {(services.length > 0 || friendly.length > 0) && (
        <div className="service-friendly">
          {services.length > 0 && (
            <>
              <div className="service-title">服務設施</div>
              {services.map((service, i) => (
                <div key={i} className="service-text">
                  {service.name}
                </div>
              ))}
            </>
          )}
          {friendly.length > 0 && (
            <>
              <div className="service-title">友善認證</div>
              {friendly.map((friendly, i) => (
                <div key={i} className="service-text">
                  {friendly.name}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default withRouter(Features)
