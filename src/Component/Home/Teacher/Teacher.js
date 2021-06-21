import React from 'react';

const Teacher = (props) => {
    const teacher = props.teacher
    const { name, img, phone } = teacher;

    return (
        <div className=" mt-3 col-md-4">
            <div className='md-3 '>
                <img className='img-fluid shadow rounded p-3' style={{ height: 200 }} src={img} alt=""></img>
            </div>
            <h5 className="mt-3 text-center">{name}</h5>
            <p className="mt-3 text-center">{phone}</p>

        </div>
    );
};

export default Teacher;