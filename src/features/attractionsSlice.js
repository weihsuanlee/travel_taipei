import { createSlice } from '@reduxjs/toolkit'

export const attractionsSlice = createSlice({
  name: 'attractions',
  initialState: {
    categoryId: null,
    page: 1,
  },
  reducers: {
    changeCateoryId: (state, action) => {
      state.categoryId = action.payload
    },
    changePageNow: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { changeCateoryId, changePageNow } = attractionsSlice.actions
// Selector
export const selectCategory = (state) => state.attractions.categoryId
export const selectPage = (state) => state.attractions.page

export default attractionsSlice.reducer
