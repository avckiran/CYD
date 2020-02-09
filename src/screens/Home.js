import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { auth, db } from '../config/Fire';
import Spinner from '../components/Spinner';
import NoQuestions from '../components/NoQuestions';

const Home = () => {
    const [authenticated, setAuthenticated] = useState('');
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthenticated('true');
                const ref = db.collection(`users/${user.uid}/questions`)
                ref.get().then(data => setQuestions(data.docs)).catch(err => console.error(err.message));
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
        console.log(questions);
        return <>
         <div id='home-screen' className="d-flex justify-content-between flex-column">
            <div className="text-right">
                <a className="text-dark" onClick = {logout}>Logout</a>
            </div>
            {/* Main Body */}
            <div id="home-body" className="text-dark text-center text-sm flex-grow-1 d-flex flex-column align-items-center">
                {questions ? (<div>Yaay... there are questions </div>) : <NoQuestions />}
                
            </div>
            {/* Footer */}
            <div id="footer">
                <span className="text-sm">Copyright reserved :P </span>
            </div>
        </div>
        </>
    } else {
        return <Redirect to='/login' />
    }
}

export default Home;
