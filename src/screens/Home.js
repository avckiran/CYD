import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { auth } from '../config/Fire';
import Spinner from '../components/Spinner';

const Home = () => {
    const [authenticated, setAuthenticated] = useState('');

    auth.onAuthStateChanged(user => {
        if(user) {
            setAuthenticated('true');
            console.log(user);
        } else {
            setAuthenticated('false');
        }
    });

    const logout = () => {
        auth.signOut();
    }

    if(authenticated === '') {
        return (
            <Spinner />
        )
    } else if (authenticated === 'true') {
        return <div className="container mt-5">
            <a className="text-dark" onClick = {logout}>Logout</a>
            <h4 className="text-primary text-center">Home Screen</h4>
        </div>
    } else {
        return <Redirect to='/login' />
    }
}

export default Home;
