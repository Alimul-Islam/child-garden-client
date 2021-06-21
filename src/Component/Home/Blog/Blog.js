import React from 'react';
import './Blog.css'
import BlogPost from './../BlogPost/BlogPost';
import wilson from '../../../Images/blg1.jpeg'
import mark from '../../../Images/blg2.jpg'
import jena from '../../../Images/blg3.jpg'

const Blog = () => {
    const blogData = [
        {
            title: 'Today is the first day of the rest of your life',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Marilyn D. Alexander',
            authorImg: wilson,

        },
        {
            title: 'I’ve always loved the first day of school better than the last day of school. Firsts are best because they are beginnings',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Jenny Han',
            authorImg: mark,

        },
        {
            title: '“Learning is a treasure that will follow its owner everywhere.” ',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
            author: 'Willie Thompson',
            authorImg: jena,

        },
    ]
    return (
        <section className="blogs my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1> News Feed</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;