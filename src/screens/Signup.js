import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='signup-screen container'>
            <div className='signup-screen__form'>
                <p className='text-center h4'> CYD signup</p>
                <form>
                    <div className='form-group'>
                        <input type='text' class='form-control' id='inputName' placeholder='Full Name' />
                    </div>
                    <div className='form-group'>
                        <input type='email' class='form-control' id='inputEmail' placeholder='Email address' />
                    </div>
                    <div className='form-group'>
                        <input type='password' class='form-control' id='inputPassword' placeholder='Password'/>
                    </div>
                </form>
                <div className='text-center'>
                    <button className='btn btn-outline-danger'>Sign up</button>
                </div>
                <div className='text-center mt-3'>
                    Already have an account? <Link to="/login">Sign in </Link>
                </div>

            </div>
        </div>
    )
}

export default Signup;