import { configureStore } from '@reduxjs/toolkit'
import attractionsReducer from '../features/attractionsSlice'

export default configureStore({
  reducer: {
    attractions: attractionsReducer,
  },
})
