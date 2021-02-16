import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { auth, db } from '../config/Fire';
import Spinner from '../components/Spinner';
import NoQuestions from '../components/NoQuestions';
import QuestionDisplay from '../components/QuestionDisplay';
import Header from '../components/Header';
import AddQuestion from './AddQuestion';
import { MyQuestions } from './MyQuestions';

const Home = () => {
    const [authenticated, setAuthenticated] = useState('');
    const [user, setUser] = useState({});
    const [questions, setQuestions] = useState(null);
    
 
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                setAuthenticated('true');
                setUser(user);
                const ref = db.collection(`users/${user.uid}/questions`);
                ref.get()
                    .then(data => setQuestions(data.docs.map(doc => doc.data())))
                    .catch(err => console.error(err.message))
            } else {
                setAuthenticated('false');
            }
        });
    }, []);


    if(authenticated === '') {
        return (
            <Spinner />
        )
    } else if (authenticated === 'true') {
        console.log(questions);
        return <>
         <div id='home-screen' className="d-flex justify-content-between flex-column">
            <Header />
            <Link to='/add'> Add Question </Link>
            <Link to='/myquestions'> My Questions </Link>
            <div id="home-body" className="text-dark text-center text-sm flex-grow-1 d-flex flex-column align-items-center">
                {questions?.length > 0 ? <QuestionDisplay questions={questions} /> : <NoQuestions />}
            </div>
        </div>
        </>
    } else {
        return <Redirect to='/login' />
    }
}

export default Home;
