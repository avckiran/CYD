import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { auth } from '../config/Fire';

const Welcome = () => {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        });
    }, []);

    return authenticated ? <Redirect to='/home'/> : (
        <div id='welcome-screen' className="container d-flex justify-content-start flex-column">
            <div className='text-center m-3 mt-5'>
                <p className="display-4 text-primary">
                    Welcome
                </p>
            </div>
            <div className='m-3'>
                <small>
                    We are excited to have you. We have created a very simple yet powerful tool that helps you track progress towards your various goals in life. You can customize this tool to fit your needs. You can track your activity and generate reports (daily, weekly, monthly). To make your experience smooth and you to have a piece of mind, our promise to you is...
                <ul className='mt-3'>
                    <li>No ads whatsoever. Even in the Free version</li>
                    <li>Your privacy stays yours. We don't sell your data</li>
                    <li>We don't spam your email inbox ever</li>
                </ul>
                    We hope you enjoy this. 
                </small>
            </div>
            <div className='mt-5 p-3'> 
                <Link to='/signup' className="mt-2 p-2 btn btn-sm btn-primary btn-block"><strong>Get Started</strong></Link>
                <Link to='/login' className="mt-3 p-2 btn btn-sm btn-outline-dark btn-block">Already have an account? Login </Link>
            </div>
        </div>
    )
}

export default Welcome;
