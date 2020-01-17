import React from 'react';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import Home from './Home';

const Login = () => {
    return (
        <div className='login-screen container'>
            <div className='login-screen__form'>
                <p className='text-center h4'> CYD Login</p>
                <form>
                    <div className='form-group'>
                        <input type='email' class='form-control' id='inputEmail' placeholder='Email address' />
                    </div>
                    <div className='form-group'>
                        <input type='password' class='form-control' id='inputPassword' placeholder='Password'/>
                    </div>
                </form>
                <div className='text-right'>
                    <small>
                        <a href='#'>Forgot Password</a>
                    </small>
                </div>
                <div className='text-center'>
                    <Link className='btn btn-outline-danger' to='/'> Sign in</Link>
                </div>
                <div className='text-center mt-3'>
                    Don't have an account yet ? <Link to="/signup" >Sign up</Link>
                </div>

            </div>
        </div>
    )
}



export default Login;