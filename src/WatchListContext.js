import React, { createContext, useState, useEffect } from 'react'

export const WatchListContext = createContext()

export const WatchListContextProvider = (props) => {
  const [watchList, setWatchList] = useState([])

  const addSpot = (spot) => {
    // console.log(id)
    if (watchList.indexOf(spot) === -1) {
      setWatchList([spot, ...watchList])
      console.log(spot)
    } else {
      deleteSpot(spot)
    }
  }
  const deleteSpot = (spot) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== spot
      })
    )
  }

  return (
    <WatchListContext.Provider value={{ watchList, deleteSpot, addSpot }}>
      {props.children}
    </WatchListContext.Provider>
  )
}
