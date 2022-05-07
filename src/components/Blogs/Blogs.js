import React from 'react';
import Footer from '../Footer/Footer';
import './Blogs.css'
const Blogs = () => {
    return (
        <>
            <div className="blogs-container">
                <div className='article'>
                    <h2>Difference Between Javascript and Node.js?</h2>
                    <p>--- Javascript is a programming language and Node.js is a runtime environment for Javascript. Before Node.js Javascript can only be used in the front end of an website, it was used to make website functional and dynamic. Node.js has given Javascript the power to run on server side. It uses the Chrome v8 engine to interpret Javascript, and gives Javascript context of system APIs, so that we can use javascript on back end</p>
                </div>
                <div className="article">
                    <h2>When should you use Node.js And When should you use MongoDB</h2>
                    <p>--- Node.js is a Javascript runtime, and MongoDB is a NoSQL database. If someone wants to build a chat app, which requires realtime and small but fast data transfer, he/she should go towards Node.js. And since MongoDB is a NoSQL database it is built for fast queries, and it is a general purpose database.</p>
                </div>
                <div className="article">
                    <h2>Difference between SQL and NoSQL database?</h2>
                    <p>--- SQL databases was created to prevent data duplication. And NoSQL database was created for fast queries. In sql databases datas ar stored in a tabular form, and in No SQL databases data schemar ar flexible, though there are many types of NoSQL databases the fundamentals are the same. SQL databases are harder to manage, but as NoSQL databases are flexible its easy to maintain and store data, as programmer can store data in the same form as they code in the application</p>
                </div>
                <div className="article">
                    <h2>What is the purpose of JWT tokens? and how does it works?</h2>
                    <p>--- JWT tokens are used to give users a better experience, security. JWT tokens are used to that users doesn't need to repeat the same things every time the viti a website like login. When an user log in, we developers send a token to client side, signed with a secret key, and store it in the local storage. Next time the same user try to login, server verify that token and give user the access. An access token has three parts, Header, Payload and Secret Key.</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;