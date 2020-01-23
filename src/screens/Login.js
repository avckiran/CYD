import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { auth } from '../config/Fire';
import Spinner from '../components/Spinner';
import logo from '../assets/logo.png';

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
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const signin = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(formData.email, formData.password)
        .then( user => {
            if(user) {
                setAuthenticated('true');
            } else {
                setAuthenticated('false');
            }
        })
        .catch( err => setError(err.message));
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
            <div id='login-screen' className="container d-flex justify-content-around flex-column">
                <div className='text-center' >
                    <img className='brand-logo' src={logo} />
                </div>
                <div className="w-auto p-2">
                    <h4 className="text-center">Sign in</h4>
                    <small className='text-danger'>{error}</small>
                    <form onSubmit={e => signin(e)}>
                        <input type="email" onChange={e => onChange(e)} className="form-control mt-3" name="email" placeholder="Email"/>
                        <input type="password" onChange={e => onChange(e)} className="form-control mt-3" name="password" placeholder="Password"/>
                        <div className="text-right mt-3">
                            <small>
                                <Link to='/forgotPassword'>Forgot Password</Link>
                            </small>
                        </div>
                        <button className="btn btn-primary btn-block mt-3">Login</button>
                    </form>
                    <div className="mt-4">Don't have an account? <Link to="/signup">Register</Link></div>
                </div>
                <div>
                    <small>Copyright 2020 reserved</small>
                </div>
            </div>
        )
    }
}

export default Login;