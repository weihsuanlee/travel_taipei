import { Pagination } from '@material-ui/lab'
import { useDispatch } from 'react-redux'
import { changePageNow, selectPage } from '../features/attractionsSlice'
import { useSelector } from 'react-redux'

import './BasicPagination.scss'
export default function BasicPagination({ totalPage }) {
  const page = useSelector(selectPage)
  const dispatch = useDispatch()
  const handleClick = (page) => {
    dispatch(changePageNow(page))
  }
  return (
    <div className="pagination">
      <Pagination
        count={totalPage}
        page={page}
        onChange={(event, val) => handleClick(val)}
      />
    </div>
  )
}
