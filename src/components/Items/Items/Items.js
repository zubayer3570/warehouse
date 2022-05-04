import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='manage-inventory-container'>
            <h2 className='text-center'>Items</h2>
            <div className="inventory-item-container">
                {
                    items.map(item => <Item key={item._id} item={item} />)
                }
            </div>
        </div >
    );
};

export default Items;