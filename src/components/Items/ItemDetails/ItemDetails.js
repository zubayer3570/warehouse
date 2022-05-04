import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './ItemDetails.css'

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
    const handleResctock = (e) => {
        e.preventDefault()
        const increaseBy = e.target.increaseBy.value
        fetch('http://localhost:5000/restock', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ increaseBy, id })
        })
    }
    return (
        <>
            <div className='item-container'>
                <p>Name: {item.name}</p>
                <p>id: {item._id}</p>
                <p>price: {item.price}</p>
                <p>quantity: {quantity}</p>
                <p>Supplier: {item.supplier}</p>
                <p>description: {item.description}</p>
                <Button onClick={handleDelivery} variant='primary'>Delivered</Button>
            </div>
            <form className='restock-form' onSubmit={handleResctock}>
                <input type="text" placeholder='Enter Amount' name='increaseBy' />
                <Button as='input' type="submit" variant='primary' value='Re-stock'></Button>
            </form>
            <Link to='/manage-inventory' >Manage Inventory</Link >
        </>

    );
};

export default ItemDetails;