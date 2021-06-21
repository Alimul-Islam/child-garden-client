import React from 'react';
import { useHistory } from 'react-router-dom';

const SingleTeacher = (props) => {
    const teacher = props.teach;
    const { _id, name, phone } = teacher;
    const history = useHistory();
    const handleDelete = () => {
        fetch(`http://localhost:4000/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                alert('successfully  Deleted ')
                history.replace('/');
            });

    }


    return (
        <tr>
            <td>{name}</td>
            <td>{phone}</td>
            <td><button class="btn btn-danger" onClick={handleDelete}>Delete</button></td>
        </tr>
    );
};

export default SingleTeacher;