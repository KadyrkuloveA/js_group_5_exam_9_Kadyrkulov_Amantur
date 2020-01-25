import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <NavLink className="navbar-brand" to='/'>Contacts</NavLink>
            <div className='form-inline'>
                <NavLink className="btn btn-outline-success my-2 my-sm-0" to='/newContact'>Add New</NavLink>
            </div>
        </nav>
    );
};

export default Menu;