import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Frontpage from "./views/Frontpage";


function App() {
document.title = "Osaky Shipping Company"
    return (
      <Router basename="/">
        <div>
          <Switch>
            <Route path="/" component={Frontpage} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;
