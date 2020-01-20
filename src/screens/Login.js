import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../config/Fire';
import Spinner from '../components/Spinner';

const Login = () => {
    useEffect(() => {
        auth.onAuthStateChanged( user => {
            if (user) {
                setAuthenticated('true');
            } else {
                setAuthenticated('false');
            }
        })
    }, []);

    const [authenticated, setAuthenticated] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(formData.email, formData.password)
        .then( user => console.log(user))
        .catch( err => console.error(err.message));
    }

    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    if(authenticated === '') {
        return (
            <Spinner />
        )
    } else if (authenticated === 'true') {
        return <Redirect to='/home' />
    } else {
        return (
            <div className="container mt-2">
                <div className="d-flex justify-content-center ">
                    <div className="w-auto p-5 mt-5">
                        <h4 className="text-center m-3">Sign in</h4>
                        <form onSubmit={e => signin(e)}>
                            <input type="email" onChange={e => onChange(e)} className="form-control mt-3" name="email" placeholder="Email"/>
                            <input type="password" onChange={e => onChange(e)} className="form-control mt-3" name="password" placeholder="Password"/>
                            <button className="btn btn-primary btn-block mt-3">Login</button>
                        </form>
                        <div className="mt-4">Don't have an account? <Link to="/signup">Register</Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;