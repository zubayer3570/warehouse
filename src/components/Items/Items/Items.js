import React, { useEffect, useState } from 'react';
import useItems from '../../../Hooks/useItems';
import Heading from '../../Shared/Heading/Heading';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useItems(6)
    return (
        <div className='items-container'>
            <Heading title='Items' width='130' />
            <div className="items">
                {
                    items.map(item => <Item key={item._id} item={item} />)
                }
            </div>
        </div >
    );
};

export default Items;