import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';

const App = () => {    
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Login } />
                <Route exact path='/signup' component={ Signup } />
                <Route exact path='/home' component={ Home } />
            </Switch>
        </Router>
    )

}

export default App;