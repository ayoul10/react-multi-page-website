import './App.css';
import React from 'react';
import P1 from './P1';
import Login from './backoffice/Login'

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import BackOffice from "./backoffice/BackOffice";
class App extends React.Component {
  render(){
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <P1 />
                    </Route>
                    <Route path="/backoffice/Login">
                        <Login />
                    </Route>
                    <Route path="/backoffice/BackOffice">
                        <BackOffice />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
  }
}

export default App;
