import React from 'react';
import './InventoryItem.css'

const InventoryItem = (props) => {
    const handleDelete = props.handleDelete
    return (
        <tr>
            <td className='td'>{props.item.email}</td>
            <td className='td'>{props.item.name}</td>
            <td className='td'>{props.item.price}</td>
            <td className='td'>{props.item.brand}</td>
            <td className='td'>{props.item.supplier}</td>
            <td className='td'>{props.item.quantity}</td>
            <td className='td-btn'><button onClick={() => handleDelete(props.item._id)}>Delete</button></td>
        </tr>
    );
};

export default InventoryItem;