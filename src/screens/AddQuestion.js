import React from 'react';
import { Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';


const AddQuestion = () => {
    return <>
        <Link to='/home'>Back</Link>
        <div className='d-flex flex-column justify-content-around'>
            <AddQuestionForm />
        </div>
    </>
}

export default AddQuestion;
