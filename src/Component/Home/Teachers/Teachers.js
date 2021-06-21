import React, { useEffect, useState } from 'react';
// import teacherData from '../../FakeData/Fakedata.json'
import Teacher from './../Teacher/Teacher';

const Teachers = () => {

    const [teacherData, setTeacherData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/teachers')
            .then(res => res.json())
            .then(data => setTeacherData(data));
    }, [])



    return (

        <section className="teachers">
            <div className="container">
                <h5 className="text-center  text-primary">Our Qualified Staffs</h5>
                <div className="row">
                    {
                        teacherData.map(teacher => <Teacher teacher={teacher}></Teacher>)
                    }

                </div>
            </div>
        </section>
    );
};

export default Teachers;