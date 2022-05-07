import React from 'react';
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
            fetch('http://localhost:5000/delete', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
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
            <div className='position-absolute w-100'>
                <Footer />
            </div>

        </>

    );
};

export default ManageInventory;