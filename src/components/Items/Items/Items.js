import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useItems(6)
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