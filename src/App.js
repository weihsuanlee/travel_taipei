import AttractionsList from './AttractionsList'
import AttractionDetail from './AttractionDetail'
import WatchList from './WatchList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
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
    </Router>
  )
}

export default App
