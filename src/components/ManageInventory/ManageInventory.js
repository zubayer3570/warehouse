import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Footer from '../Footer/Footer';
import InventoryItem from '../InventoryItem/InventoryItem';
import Heading from '../Shared/Heading/Heading';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items, setItems] = useItems('all')
    const handleDelete = (id) => {
        const confirmed = window.confirm('Are you sure to delete?')
        if (confirmed) {
            const del = async () => {
                await axios.post('https://warehouse-management-web-app.herokuapp.com/delete', { id })
            }
            del()
            const newItems = items.filter(item => item._id !== id)
            setItems(newItems)
        }
    }
    return (
        <>
            <Heading title='Manage Inventory' width='350' />
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Added By</th>
                            <th>name</th>
                            <th>unit price</th>
                            <th>brand</th>
                            <th>supplier</th>
                            <th>quantity</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <InventoryItem key={item._id} handleDelete={handleDelete} item={item} />)
                        }
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-center'>
                <Button variant='dark' className='mt-3' as={Link} to='/add-item' >Add Products +</Button>
            </div>
            <div className='position-absolute w-100'>
                <Footer />
            </div>

        </>

    );
};

export default ManageInventory;