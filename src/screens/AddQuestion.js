import React from 'react';
import { Link } from 'react-router-dom';
import AddQuestionForm from '../components/AddQuestionForm';


const AddQuestion = () => {
    return <>
        <div className='bg-primary d-flex align-items-center p-2 justify-content-between' style={{height: '50px'}}>
            <Link to='/home' className='text-white'>Back</Link>
            <div className='text-white flex-grow-1 text-center'><strong>Check Your Day</strong></div>
            <div className='text-white'>#</div>
        </div>
        <div className='d-flex flex-column justify-content-around'>
            <AddQuestionForm />
        </div>
    </>
}



export default AddQuestion;
