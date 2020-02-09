import React from 'react';
import { auth } from '../config/Fire';

const Header = () => {

    const logout = () => {
        auth.signOut();
    }

    return <>
        <div className="d-flex justify-content-between bg-primary p-3 text-white">
            <div><i className="fa fa-bars" aria-hidden="true"></i></div>
            <div className='flex-grow-1 text-center'><strong>CYD</strong></div>
            <a onClick = {logout}><i className="fa fa-power-off" aria-hidden="true"></i></a>
        </div>
    </>
}

export default Header;