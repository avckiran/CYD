import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import ForgotPass from './screens/ForgotPass';
import Welcome from './screens/Welcome';
import Options from './screens/Options';

const App = () => {    
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ Welcome } />
                <Route exact path='/login' component={ Login } />
                <Route exact path='/signup' component={ Signup } />
                <Route exact path='/options' component={ Options } />
                <Route exact path='/home' component={ Home } />
                <Route exact path='/forgotPassword' component={ ForgotPass } />
            </Switch>
        </Router>
    )

}

export default App;