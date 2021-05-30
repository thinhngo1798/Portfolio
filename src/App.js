import React from 'react';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
function App() {
  return (
       <Router>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/contact"} children={() => <Contact />} />
          <Route path={process.env.PUBLIC_URL + '/'}children={() => <Portfolio />} />
          <Redirect to={process.env.PUBLIC_URL + "/"} />
        </Switch>
      </Router>
    
  );
}
export default App;

