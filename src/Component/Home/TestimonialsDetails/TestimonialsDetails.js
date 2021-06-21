import React from 'react';

const TestimonialsDetails = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className="card  shadow-sm">
            <div className="card-body mt-2 ">
                <p className="card-text  text-center">{quote}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-3">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsDetails;