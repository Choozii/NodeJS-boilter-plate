import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Landingpage from './components/views/LandingPage/LandingPage';
import Loginpage from './components/views/LoginPage/LoginPage';
import Registerpage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <div className="App">
        <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landingpage} />
          <Route exact path="/login" component={Loginpage} />
          <Route exact path="/register" component={Registerpage} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}


export default App;
