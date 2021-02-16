import React, { useEffect, useState } from 'react';
import { Link }  from 'react-router-dom';
import { auth, db } from '../config/Fire';

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

    console.log("MyQuestions : ", questions);

    return <>
        <div className='bg-primary d-flex align-items-center p-2 justify-content-between' style={{height: '50px'}}>
            <Link to='/home' className='text-white'>Back</Link>
            <div className='text-white flex-grow-1 text-center'><strong>Check Your Day</strong></div>
            <div className='text-white'>#</div>
        </div>
        <div className='d-flex flex-column justify-content-around'>
            <h4>My Questions</h4>
        </div>
    </>
}