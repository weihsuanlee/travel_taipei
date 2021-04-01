import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useDispatch } from 'react-redux'
import { changeCateoryId, changePageNow } from '../features/attractionsSlice'
import './Category.scss'
import { selectCategory } from '../features/attractionsSlice'
import { useSelector } from 'react-redux'

function Category() {
  const dispatch = useDispatch()
  const categoryId = useSelector(selectCategory)

  const [value, setValue] = useState(categoryId)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleClick = (categoryId) => {
    dispatch(changeCateoryId(categoryId))
    dispatch(changePageNow(1))
  }
  const TabItem = (label, categoryId) => (
    <Tab
      label={label}
      onClick={() => {
        handleClick(categoryId)
      }}
      value={categoryId}
    />
  )
  return (
    <div className="category-btns">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {TabItem('全部景點', 0)}
          {TabItem('藝文場館', 15)}
          {TabItem('戶外踏青', 16)}
          {TabItem('公共藝術', 18)}
          {TabItem('親子共遊', 19)}
          {TabItem('歷史建築', 13)}
          {TabItem('夜市商圈', 23)}
          {TabItem('單車遊蹤', 12)}
          {TabItem('主題商街', 24)}
          {TabItem('宗教信仰', 14)}
          {TabItem('養生溫泉', 11)}
          {TabItem('藍色水路', 17)}
          {TabItem('無障礙旅遊', 25)}
          {TabItem('北北基景點', 20)}
        </Tabs>
      </AppBar>
    </div>
  )
}

export default Category
