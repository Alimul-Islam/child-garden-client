import React from 'react';
import './Testimonials.css';
import m1 from '../../../Images/m-1.jpg'
import f2 from '../../../Images/f-4.jpg'
import m3 from '../../../Images/m-3.jpg'
import TestimonialsDetails from './../TestimonialsDetails/TestimonialsDetails';
const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Allyson Kennedy',
        from: 'Middletown',
        img: m1
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Marcia  White',
        from: 'Warrensburg',
        img: f2
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name: 'Steven Arroyo',
        from: 'Simpson Square Gould',
        img: m3
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Parents <br /> Feedback </h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <TestimonialsDetails testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;