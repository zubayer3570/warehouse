import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import Footer from '../Footer/Footer';
import '../form-css/form.css'
import axios from 'axios';

const AddItem = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const supplier = e.target.supplier.value
        const shortDes = e.target.shortDes.value
        const fullDes = e.target.fullDes.value
        const email = e.target.email.value
        const doc = { name, price, quantity, supplier, shortDes, fullDes, email }
        await axios.post('http://localhost:5000/add-item', { doc })
        navigate('/my-items')
    }
    return (
        <>
            <div className="form-container">
                <Form className='form' onSubmit={handleSubmit}>
                    <h2 className='text-center mb-4'>Add a Product</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control type="text" name="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Control type="number" name="price" placeholder="Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicURL">
                        <Form.Control type="URL" name="URL" placeholder="Enter URL of the Photo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSupplier">
                        <Form.Control type="text" name="supplier" placeholder="Enter Supplier Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicQuantity">
                        <Form.Control type="number" name="quantity" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicShortDes">
                        <Form.Control type="Text" name="shortDes" placeholder="Enter Short Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDes">
                        <Form.Control type="Text" name="fullDes" placeholder="Enter Full Description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Enter Your email" />
                    </Form.Group>
                    <Button style={{ width: "100%" }} variant='dark' type="submit">Add Item</Button>
                </Form>
            </div>
            <Footer />
        </>
    );
};

export default AddItem;