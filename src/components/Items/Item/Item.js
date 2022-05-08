import React from 'react';
import { Button } from 'react-bootstrap';
import './Item.css'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
const Item = (props) => {
    const navigate = useNavigate()
    AOS.init({
        offset: 100,
        duration: 500,
        easing: 'ease-in'
    })
    return (
        <div className='item-container' data-aos="fade-up">
            <img src={props.item.photoURL} alt="" />
            <p className='mt-3'>Name: {props.item.name}</p>
            <p>Price:{props.item.price}</p>
            <p>Quantity: {props.item.quantity}</p>
            <p>Supplier: {props.item.supplier}</p>
            <p>Description: {props.item.shortDescription}</p>
            <Button onClick={() => navigate(`/inventory/${props.item._id}`)} variant='dark'>Update Stock</Button>
        </div>
    );
};

export default Item;