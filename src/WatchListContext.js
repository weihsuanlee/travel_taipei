import { createContext, useState } from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([])

  const addSpot = (spot) => {
    const index = watchList.findIndex((item) => item.id === spot.id)
    console.log(index)
    if (index === -1) {
      const newWatchList = [spot, ...watchList]
      setWatchList(newWatchList)
      console.log(spot)
      console.log(newWatchList)
    } else {
      deleteSpot(spot)
    }
  }
  const deleteSpot = (spot) => {
    const newWatchList = watchList.filter((el) => {
      return el.id !== spot.id
    })
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  return (
    <WatchListContext.Provider value={{ watchList, deleteSpot, addSpot }}>
      {props.children}
    </WatchListContext.Provider>
  )
}
