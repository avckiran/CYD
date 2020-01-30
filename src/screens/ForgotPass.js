import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/Fire';

const ForgotPass = () => {
    const [formData, setFormData] = useState({
        email: '',
    });
    
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    
    useEffect(() => {
        setError(null);
        setMessage(null);
        setFormData({});
    },[]);
    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value});
    };

    const onSubmit = e => {
        e.preventDefault();
        auth.sendPasswordResetEmail(formData.email)
        .then(() => setMessage('An email has been sent'))
        .catch(err => setError(err.message));
        setFormData({});

    }

    return (
    <div id='forgot-password' className="container d-flex justify-content-around flex-column">
        <div>
            <small>
                <Link to='/login'>Go Back</Link>
            </small>
        </div>
        <div className="w-auto p-2">
            <h4 className="text-center">Reset your password</h4>
            <small className='text-danger'>{error}</small>
            <form onSubmit={e => onSubmit(e)}>
                <input type="email" onChange={e => onChange(e)} className="form-control mt-3" name="email" placeholder="Please enter your email"/>
                <button className="btn btn-primary btn-block mt-3">Reset Password</button>
                <div>
                    <small className="text-success">{message}</small>
                </div>
            </form>
        </div>
        <div>
        </div>
    </div>
    ) 
        
}

export default ForgotPass;
