import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Heading from '../../Shared/Heading/Heading';
import './ItemDetails.css'

const ItemDetails = () => {
    const navigate = useNavigate()
    const id = useParams().id
    const [item, setItem] = useState({})
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        const getItem = async () => {
            const { data } = await axios.get(`https://warehouse-management-web-app.herokuapp.com/inventory/${id}`)
            setItem(data)
            setQuantity(data.quantity)
        }
        getItem()
    }, [id])
    const handleDelivery = async () => {
        await axios.post(`https://warehouse-management-web-app.herokuapp.com/inventory/${id}`, {})
        const newQuantity = quantity - 1
        setQuantity(newQuantity)
    }
    const handleResctock = async (e) => {
        e.preventDefault()
        const increaseBy = e.target.increaseBy.value
        await axios.post('https://warehouse-management-web-app.herokuapp.com/restock', { increaseBy, id })
            .then(data => {
                const newQuantity = quantity + parseInt(increaseBy)
                setQuantity(newQuantity)
            })
    }
    return (
        <>
            <Heading title='Item Details' width='250px' />
            <div className='item-details-container'>
                <div>
                    <img src={item.photoURL} alt="" />
                    <form className='restock-form' onSubmit={handleResctock}>
                        <input type="text" placeholder='Enter Amount' name='increaseBy' />
                        <Button as='input' type="submit" variant='dark' value='Re-stock'></Button>
                        <div className="deliver-inventory-container">
                            <Button onClick={handleDelivery} variant='dark'>Delivered</Button>
                            <Button variant='dark' onClick={() => navigate('/manage-inventory')} >Manage Inventory</Button>
                        </div>
                    </form>
                </div>
                <div>
                    <p>Name: {item.name}</p>
                    <p>Id: {item._id}</p>
                    <p>price: {item.price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {item.supplier}</p>
                    <p>Description: {item.description}</p>

                </div>
            </div>
            <Footer />
        </>

    );
};

export default ItemDetails;