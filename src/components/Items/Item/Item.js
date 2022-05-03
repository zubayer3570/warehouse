import React from 'react';
import { Button } from 'react-bootstrap';
import './Item.css'
import car from '../../../Images/item/car.jpg'
import { Link } from 'react-router-dom';

const Item = () => {
    return (
        <div className='item-container'>
            <img src={car} alt="" />
            <p>Product: car</p>
            <p>price: 1000</p>
            <p>quantity: 2</p>
            <p>description: this is this product</p>
            <Button as={Link} to='/inventory/1' variant='primary'>Update Stock</Button>
        </div>
    );
};

export default Item;