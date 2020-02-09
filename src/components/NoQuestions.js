import React from 'react';
import { Link } from 'react-router-dom';

const NoQuestions = () => {
    return <>
        <div className="text-muted m-auto">
            <div className='p-3'>Looks like you don't have any questions! Please add few</div>
            <Link to='/add' className="mt-2 btn btn-primary btn-sm">Add Questions</Link>
        </div>
    </>
}

export default NoQuestions;