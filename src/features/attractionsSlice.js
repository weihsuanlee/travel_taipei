import { createSlice } from '@reduxjs/toolkit'

export const attractionsSlice = createSlice({
  name: 'attractions',
  initialState: {
    categoryId: null,
    page: 1,
    attractions: [],
  },
  reducers: {
    changeCateoryId: (state, action) => {
      state.categoryId = action.payload
    },
    changePageNow: (state, action) => {
      state.page = action.payload
    },
    getAllAttractions: (state, action) => {
      state.attractions = action.payload
    },
  },
})

export const {
  changeCateoryId,
  changePageNow,
  getAllAttractions,
} = attractionsSlice.actions

// Selector
export const selectCategory = (state) => state.attractions.categoryId
export const selectPage = (state) => state.attractions.page
export const selectAllAttractions = (state) => state.attractions.attractions

export default attractionsSlice.reducer
