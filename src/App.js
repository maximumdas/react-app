// import { useState } from "react";
import Home from './component/Home'
import Create from './component/Create'
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BlogDetail from './component/BlogDetail';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
