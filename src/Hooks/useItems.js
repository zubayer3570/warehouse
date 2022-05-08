import axios from 'axios';
import { useEffect, useState } from 'react';

const useItems = (amount) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get(`https://warehouse-management-web-app.herokuapp.com/items/${amount}`)
            setItems(data)
        }
        getItems()
    }, [amount])
    return [items, setItems]
};

export default useItems;