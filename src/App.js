import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component = { Home } />
                <Route exact path='/login' component= { Login } />
                <Route exact path='/signup' component= { Signup } />
            </Switch>
        </Router>
        )

}

export default App;