import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './ItemDetails.css'

const ItemDetails = () => {
    const id = useParams().id
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`http://localhost:5000/inventory/${id}`)
            setItem(data)
            setQuantity(data.quantity)
        }
        getItem()
    }, [id])
    const handleDelivery = async () => {
        await axios.post(`http://localhost:5000/inventory/${id}`, {})
        const newQuantity = quantity - 1
        setQuantity(newQuantity)
    }
    const handleResctock = async (e) => {
        e.preventDefault()
        const increaseBy = e.target.increaseBy.value
        await axios.post('http://localhost:5000/restock', { increaseBy, id })
            .then(data => {
                const newQuantity = quantity + parseInt(increaseBy)
                setQuantity(newQuantity)
            })
    }
    return (
        <>
            <div className='item-details-container'>
                <div>
                    <img src={item.photoURL} alt="" />
                </div>
                <div>
                    <p>Name: {item.name}</p>
                    <p>Id: {item._id}</p>
                    <p>price: {item.price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {item.supplier}</p>
                    <p>Description: {item.description}</p>
                    <div>
                        <Button onClick={handleDelivery} variant='dark'>Delivered</Button>
                        <Button className='m-2' variant='dark'>
                            <Link to='/manage-inventory' className='text-white text-decoration-none'>Manage Inventory</Link >
                        </Button>
                        <form className='restock-form' onSubmit={handleResctock}>
                            <input type="text" placeholder='Enter Amount' name='increaseBy' />
                            <Button as='input' type="submit" variant='dark' value='Re-stock'></Button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};

export default ItemDetails;