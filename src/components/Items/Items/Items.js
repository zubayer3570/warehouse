import React from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    return (
        <div className='manage-inventory-container'>
            <h2 className='text-center'>Items</h2>
            <div className="inventory-item-container">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </div >
    );
};

export default Items;