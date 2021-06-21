import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className='m-5 p-5'>
                <Link to='/dashboard'><h3>Dashboard</h3></Link>
                <Link to='/addTeacher'><h3>Add a new teacher</h3></Link>
            </div>

        </div>
    );
};

export default Sidebar;