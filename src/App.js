import React from 'react';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <HashRouter basename="/">
       <Router>
        <Switch>
          <Route path="/contact" children={() => <Contact />} />
          <Route exact path="/" children={() => <Portfolio />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </HashRouter>
    
  );
}
export default App;

