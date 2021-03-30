import Chip from '@material-ui/core/Chip'
import './Features.scss'

function Features(props) {
  const { targets, categories, services, friendly } = props
  return (
    <>
      {targets && (
        <div className="tags">
          {targets.map((target, i) => (
            <Chip key={i} label={target.name} className="tag" />
          ))}
        </div>
      )}
      {categories && (
        <div className="tags">
          {categories.map((category, i) => (
            <Chip key={i} label={category.name} className="tag" />
          ))}
        </div>
      )}
      {services && (
        <div className="tags">
          {services.map((service, i) => (
            <Chip key={i} label={service.name} className="tag" />
          ))}
        </div>
      )}
      {friendly && (
        <div className="tags">
          {friendly.map((friendly, i) => (
            <Chip key={i} label={friendly.name} className="tag" />
          ))}
        </div>
      )}
    </>
  )
}

export default Features
