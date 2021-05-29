import React from 'react';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <React.Fragment>
       <Router>
        <Switch>
          <Route path="/contact" children={() => <Contact />} />
          <Route exact path="/" children={() => <Portfolio />} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
    
  );
}
export default App;

