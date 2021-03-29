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
          <Tab
            label="全部景點"
            onClick={() => {
              handleClick(0)
            }}
          />
          <Tab
            label="藝文場館"
            onClick={() => {
              handleClick(15)
            }}
          />
          <Tab
            label="戶外踏青"
            onClick={() => {
              handleClick(16)
            }}
          />
          <Tab
            label="親子共遊"
            onClick={() => {
              handleClick(19)
            }}
          />
          <Tab
            label="歷史建築"
            onClick={() => {
              handleClick(13)
            }}
          />
          <Tab
            label="夜市商圈"
            onClick={() => {
              handleClick(23)
            }}
          />
          <Tab
            label="公共藝術"
            onClick={() => {
              handleClick(18)
            }}
          />
          <Tab
            label="無障礙旅遊"
            onClick={() => {
              handleClick(25)
            }}
          />
        </Tabs>
      </AppBar>
    </div>
  )
}

export default Category
