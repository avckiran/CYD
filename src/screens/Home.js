import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { auth } from '../config/Fire';
import Spinner from '../components/Spinner';

const Home = () => {
    const [authenticated, setAuthenticated] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthenticated('true');
            } else {
                setAuthenticated('false');
            }
        });
    }, []);

    const logout = () => {
        auth.signOut();
    }

    if(authenticated === '') {
        return (
            <Spinner />
        )
    } else if (authenticated === 'true') {
        return <div id='home-screen' className="container d-flex justify-content-between flex-column">
            <div className="text-right">
                <a className="text-dark" onClick = {logout}>Logout</a>
            </div>
            <div id="home-body" className="text-dark text-center text-sm flex-grow-1 d-flex flex-column align-items-center mt-5">
                <div className="text-muted">
                    Looks like you don't have any questions! Please add few
                </div>
                <Link to='/add' className="btn btn-primary btn-sm">Add Questions</Link>
            </div>
            <div id="footer">
                <span className="text-sm">Copyright reserved :P </span>
            </div>


        </div>
    } else {
        return <Redirect to='/login' />
    }
}

export default Home;
