import React from 'react';
import { Button } from 'react-bootstrap';
import './Item.css'
import car from '../../../Images/item/car.jpg'
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const navigate = useNavigate()
    return (
        <div className='item-container'>
            <img src={car} alt="" />
            <p>Name: {props.item.name}</p>
            <p>price:{props.item.price}</p>
            <p>quantity: {props.item.quantity}</p>
            <p>Supplier: {props.item.supplier}</p>
            <p>description: {props.item.description}</p>
            <Button onClick={() => navigate(`/inventory/${props.item._id}`)} variant='dark'>Update Stock</Button>
        </div>
    );
};

export default Item;