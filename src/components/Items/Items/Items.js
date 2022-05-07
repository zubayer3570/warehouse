import React from 'react';
import useItems from '../../../Hooks/useItems';
import Heading from '../../Shared/Heading/Heading';
import Loading from '../../Shared/Loading/Loading';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items] = useItems(6)
    if (!items.length) {
        return <Loading />
    }
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