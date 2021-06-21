import React, { useState } from 'react';
import Sidebar from './../Dashboard/Sidebar/Sidebar';
import { useHistory } from 'react-router-dom';

const AddTeacher = () => {
    const history = useHistory();
    const [teacher, setTeacher] = useState({})
    const handleOnSubmit = (e) => {
        fetch('http://localhost:4000/addTeacher', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(teacher)
        })
            .then(res => res.json())
            .then(data => {
                alert('New teacher added successfully');
                history.replace('/')
            })
        e.preventDefault();
    }
    const handleOnBlur = (e) => {
        const newTeacher = teacher
        newTeacher[e.target.name] = e.target.value;
        setTeacher(newTeacher);
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <Sidebar></Sidebar>
                </div>
                <div className='col-md-8 mt-5'>
                    <h3>Add new teacher</h3>
                    <form onSubmit={handleOnSubmit}>
                        <input type="text" onBlur={handleOnBlur} className="form-control" name="name" placeholder='Teacher Name' required></input>
                        <br />
                        <input type="text" onBlur={handleOnBlur} className="form-control" name="phone" placeholder='Phone Number' required></input>
                        <br />
                        <input type="text" onBlur={handleOnBlur} className="form-control" name="img" placeholder='Image URL' required></input>
                        <br />
                        <button className="btn btn-success"> Add</button>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default AddTeacher;