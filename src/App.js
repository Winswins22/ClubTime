import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  { Navbar } from './components'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/HomePage/Home'
import Explore from './pages/ExplorePage/Explore'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/explore' component={Explore} />
      </Switch>
    </Router>
  );
}

export default App;
