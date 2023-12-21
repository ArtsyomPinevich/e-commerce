import { createContext, useContext, useState, useEffect } from 'react';

const ItemsContext = createContext({});

export const useItemContext = () => {
    return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }: any) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const FetchData = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const json = await data.json();
            setProducts(json);
            console.log('data fetched');
        };

        FetchData();
    }, []);

    return (
        <ItemsContext.Provider value={{ products }}>
            {children}
        </ItemsContext.Provider>
    );
};
