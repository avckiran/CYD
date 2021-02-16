import React, { useEffect, useState } from 'react';
import { Link }  from 'react-router-dom';
import { auth, db } from '../config/Fire';
import './styles/myquestions.scss';

export const MyQuestions = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                const ref = db.collection(`users/${user.uid}/questions`);
                ref.get()
                    .then(data => setQuestions(data.docs.map(doc => doc.data())))
                    .catch(err => console.error(err.message))
            }
        });
    }, []);


    return <>
        <div className='bg-primary d-flex align-items-center p-2 justify-content-between' style={{height: '50px'}}>
            <Link to='/home' className='text-white'>Back</Link>
            <div className='text-white flex-grow-1 text-center'><strong>Check Your Day</strong></div>
            <div className='text-white'>#</div>
        </div>
        <div className='d-flex flex-column justify-content-around'>
            <h4>My Questions</h4>
            {questions && questions.map((question, index) => {
              return <div key={index}>
                <div className="myquestions__question">{question.question}</div>
                <cite className="myquestions__category">{question.category}</cite>
              </div>
            })}
        </div>
    </>
}