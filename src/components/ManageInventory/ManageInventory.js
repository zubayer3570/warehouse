import React from 'react';
import useItems from '../../Hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';
import './ManageInventory.css'

const ManageInventory = () => {
    const [items, setItems] = useItems('all')
    const handleDelete = (id) => {
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
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
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
    );
};

export default ManageInventory;