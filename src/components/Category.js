import { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useDispatch } from 'react-redux'
import { changeCateoryId, changePageNow } from '../features/attractionsSlice'
import './Category.scss'

function Category() {
  const dispatch = useDispatch()
  const [value, setValue] = useState(0)
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
          {TabItem('親子共遊', 19)}
          {TabItem('歷史建築', 13)}
          {TabItem('夜市商圈', 23)}
          {TabItem('主題商街', 24)}
          {TabItem('宗教信仰', 14)}
          {TabItem('無障礙旅遊', 25)}
          {TabItem('北北基景點', 20)}
          {TabItem('單車遊蹤', 12)}
        </Tabs>
      </AppBar>
    </div>
  )
}

export default Category
