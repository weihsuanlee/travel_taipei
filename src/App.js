import AttractionsList from './AttractionsList'
import AttractionDetail from './AttractionDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from './api/axios'
import requests from './api/requests'
import { useEffect, useState } from 'react'

function App() {
  const [attractions, setAttractions] = useState([])
  const [pageNow, setPageNow] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchAllAttractions, {
        params: {
          page: pageNow,
        },
      })
      setAttractions(response.data.data)
      console.log(response.data)
      return response
    }
    fetchData()
  }, [pageNow])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AttractionsList attractions={attractions} setPageNow={setPageNow} />
        </Route>
        <Route path="/:id">
          <AttractionDetail
            attractions={attractions}
            setAttractions={setAttractions}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
