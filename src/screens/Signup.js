import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../config/Fire';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const [signedUp, setSignedUp] = useState(false);

    const [error, setError] = useState(null);
    
    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }
    
    const onSubmit = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => {
            auth.currentUser.updateProfile({
                displayName: formData.name,
            }).catch(err => setError(err.message));
            setSignedUp(true);
        })
        .catch(err => setError(err.message));
    }

    return signedUp ? <Redirect to='/options' /> : (
        <div className="container mt-2">
            <div className="d-flex flex-row-reverse justify-content-center ">
                <div className="w-auto p-5 mt-5">
                    <h4 className="text-center m-3">Sign-up</h4>
                    <small className='text-danger'>{error ? error : null} </small>
                    <form id='signup-form' onSubmit={e => onSubmit(e)}>
                        <input type="text" className="form-control mt-3" onChange={e => onChange(e) }name="name" placeholder="Full Name"/>
                        <input type="email" className="form-control mt-3" onChange={e => onChange(e) }name="email" placeholder="Email"/>
                        <input type="password" className="form-control mt-3" onChange={e => onChange(e) }name="password" placeholder="Password"/>
                        <div className="blockquote-footer">
                            <cite>We never sell or share your data </cite>
                        </div>
                        <button className="btn btn-primary btn-block mt-3">Sign up</button>
                    </form>
                    <div className="mt-4">Already have an account ? <Link to="/login">Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup;