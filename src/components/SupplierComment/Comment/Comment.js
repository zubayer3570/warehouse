import React from 'react';
import AOS from 'aos';
import './Comment.css'

const Comment = (props) => {
    AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in'
    })
    return (
        <div className='comment' data-aos="flip-right">
            <h3><img src={props.comment.photoURL} alt="" /> {props.comment.name}</h3>
            <p>{props.comment.comment}</p>
        </div>
    );
};

export default Comment;