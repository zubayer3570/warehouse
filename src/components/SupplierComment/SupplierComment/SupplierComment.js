import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Heading from '../../Shared/Heading/Heading';
import Comment from '../Comment/Comment';
import './SupplierComment.css'

const SupplierComment = () => {
    const [comments, setComments] = useState([])
    useEffect(() => {
        const getComments = async () => {
            const { data } = await axios.get('https://warehouse-management-web-app.herokuapp.com/comments')
            console.log(data)
            setComments(data)
        }
        getComments()
    }, [])
    return (
        <div className='supplier-comments-container'>
            <Heading title='User Experience' width='300px' />
            <div className='comments-container'>
                {
                    console.log(comments)
                }
                {
                    comments.map(comment => <Comment key={comment._id} comment={comment} />)
                }
            </div>
        </div>
    );
};

export default SupplierComment;