import { useEffect, useState } from 'react';

const useItems = (amount) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/items/${amount}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [amount])
    return [items, setItems]
};

export default useItems;