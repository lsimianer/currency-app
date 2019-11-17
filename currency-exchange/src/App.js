import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Currency from "./pages/currency/Currency";
import NoMatch from "./pages/NoMatch";
// import Landing from "./pages/landing/Landing";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Currency} />
          <Route path='/CodeHounds' component={() => window.location = 'https://codehounds.io'}/>
        
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;