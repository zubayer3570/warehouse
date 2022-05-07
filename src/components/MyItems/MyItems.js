import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import Item from '../Items/Item/Item';
import Heading from '../Shared/Heading/Heading';
import './MyItems.css'
const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/my-items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user])
    return (
        <>
            <Heading title='My Items' width='200' />
            {
                myItems.length === 0 ?
                    <div className='my-items-0'>
                        <h2>You Haven't added any Items yet!</h2>
                        <Button variant='primary' as={Link} to='/add-item'>Add Items+</Button>
                    </div>
                    :
                    <div className="my-items-container">
                        {myItems.map(item => <Item key={item._id} item={item} />)}
                    </div>
            }
        </>
    );
};

export default MyItems;