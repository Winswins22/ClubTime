import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import  { Navbar } from './components'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/HomePage/Home'
import Explore from './pages/ExplorePage/Explore'
import GlobalStyle from './globalStyles'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>
      <Switch>
        <Route path='/explore' component={Explore} />
        <Route path='/ClubTime' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
