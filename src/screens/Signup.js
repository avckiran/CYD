import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth, db } from '../config/Fire';

const Signup = () => {

    useEffect(() => {
        auth.onAuthStateChanged(user => console.log(user))
    }, []);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    
    const [signedUp, setSignedUp] = useState(false)
    
    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    const updateName = () => {
        auth.onAuthStateChanged(user => user.updateProfile({ name: formData.name }))
    }
    
    const onSubmit = e => {
        e.preventDefault();
        // console.log('on submit method:', formData);
        auth.createUserWithEmailAndPassword(formData.email, formData.password)
        .then(() => setSignedUp(true))
        .catch(err => console.error(err.message));
    }

    return signedUp ? <Redirect to='/home' /> : (
        <div className="container mt-2">
            <div className="d-flex justify-content-center ">
                <div className="w-auto p-5 mt-5">
                    <h4 className="text-center m-3">Sign-up</h4>
                    <form onSubmit={e => onSubmit(e)}>
                        <input type="text" className="form-control mt-3" onChange={e => onChange(e) }name="name" placeholder="Full Name"/>
                        <input type="email" className="form-control mt-3" onChange={e => onChange(e) }name="email" placeholder="Email"/>
                        <input type="password" className="form-control mt-3" onChange={e => onChange(e) }name="password" placeholder="Password"/>
                        <div className="blockquote-footer">
                            <cite>We never sell or share your data </cite>
                        </div>
                        <button className="btn btn-primary btn-block mt-3">Sign up</button>
                    </form>
                    <div className="mt-4">Already have an account ? <Link to="/">Login</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Signup;