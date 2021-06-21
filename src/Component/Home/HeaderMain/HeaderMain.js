import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../../Images/photo-1.jpg';
import image2 from '../../../Images/photo-2.jpg';
import image3 from '../../../Images/photo-3.jpg';


const HeaderMain = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel fade={false} pause={true} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100  "
                        height="400px" width="400px"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Practical teaching and Social Development</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <button className="btn btn-info" >Learn More </button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100  "
                        height="400px" width="400px" src={image2}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: "#bcf542" }}>Empowering Students from small age towards vision</h3>
                        <p style={{ color: "#ffffff" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn btn-primary" > Enroll Now</button>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        height="400px" width="400px"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>"Fun in School"</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button style={{ color: '#000000' }} className='text-black'>Learn More </button>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default HeaderMain;