import AttractionsList from './AttractionsList'
import AttractionDetail from './AttractionDetail'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AttractionsList />
        </Route>
        <Route path="/:id">
          <AttractionDetail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
