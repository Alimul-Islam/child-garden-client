import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import SingleTeacher from './SingleTeacher/SingleTeacher';

const Dashboard = () => {
    const [teacher, setTeacher] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/teachers')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8 mt-5">
                    <h3>Teacher List</h3>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th> Teacher Name</th>
                                <th>Phone</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                teacher.map(teach => <SingleTeacher teach={teach}></SingleTeacher>)
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;