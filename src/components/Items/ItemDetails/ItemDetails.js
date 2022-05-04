import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const id = useParams().id
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
                setQuantity(data.quantity)
            })
    }, [id])
    const handleDelivery = () => {
        fetch(`http://localhost:5000/inventory/${id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                const newQuantity = quantity - 1
                setQuantity(newQuantity)
            })

    }
    return (
        <div className='item-container'>
            <p>Name: {item.name}</p>
            <p>id: {item._id}</p>
            <p>price: {item.price}</p>
            <p>quantity: {quantity}</p>
            <p>Supplier: {item.supplier}</p>
            <p>description: {item.description}</p>
            <Button onClick={handleDelivery} variant='primary'>Delivered</Button>
        </div>
    );
};

export default ItemDetails;