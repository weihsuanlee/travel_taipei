import AttractionsList from './AttractionsList'
import AttractionDetail from './AttractionDetail'
import WatchList from './WatchList'
import ScrollToTop from './components/ScrollToTop'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllAttractions } from './features/attractionsSlice'
import axios from './api/axios'
import requests from './api/requests'
import { WatchListContextProvider } from './WatchListContext'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchAllData() {
      let pagesRequired = 0
      axios.get(requests.fetchAllAttractions).then((res) => {
        const apiPromises = []
        pagesRequired = Math.ceil(res.data.total / 30)
        for (let i = 1; i < pagesRequired; i++) {
          apiPromises.push(
            axios.get(requests.fetchAllAttractions, {
              params: { page: i },
            })
          )
        }
        Promise.all(apiPromises).then((res) => {
          const processedResponses = []
          res.map((res) => processedResponses.push(...res.data.data))
          dispatch(getAllAttractions(processedResponses))
          console.log(processedResponses)
        })
      })
    }
    fetchAllData()
  }, [])

  return (
    <WatchListContextProvider>
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/">
              <AttractionsList />
            </Route>
            <Route exact path="/watchlist">
              <WatchList />
            </Route>
            <Route path="/:id">
              <AttractionDetail />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </WatchListContextProvider>
  )
}

export default App
