import React from 'react';
import Header from './../Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Curriculum from './../Curriculum/Curriculum';
import Featured from './../Featured/Featured';
import Testimonials from './../Testimonials/Testimonials';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Teachers from '../Teachers/Teachers';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Curriculum></Curriculum>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Teachers></Teachers>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;