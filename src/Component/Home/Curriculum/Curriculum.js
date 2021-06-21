import React from 'react';
import ph1 from '../../../Images/Kid read.jpg'
import ph2 from '../../../Images/clockbook.jpg'
import ph3 from '../../../Images/tree.jpg'
import CurriculumDetails from './../CurriculamDetails/CurriculumDetails';



const Curriculum = () => {
    const CurriculumData = [
        {
            Class: 'Kinder (3-6) years',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            img: ph1
        },
        {
            Class: 'Elementary School',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            img: ph2
        },
        {
            Class: 'Middle (10-16) years',
            title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
            img: ph3

        },
    ]
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h1>Standard Curriculum</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        CurriculumData.map(Cur => <CurriculumDetails Cur={Cur} key={Cur.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Curriculum;