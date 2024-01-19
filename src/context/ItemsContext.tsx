import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

const ItemsContext = createContext({});

interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: object;
    category: string;
}

type ItemsContextProviderProps = {
    children: ReactNode;
};

export const useItemContext = () => {
    return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }: ItemsContextProviderProps) => {
    const [products, setProducts] = useState<Item[]>([]);
    const [isDataLoading, setIsDataLoading] = useState<boolean>(false);

    useEffect(() => {
        const FetchData = async () => {
            setIsDataLoading(true);

            const data = await fetch('https://fakestoreapi.com/products');
            const json = await data.json();
            setProducts(json);

            setIsDataLoading(false);
            console.log('data fetched');
        };

        FetchData();
    }, []);

    return (
        <ItemsContext.Provider value={{ products, isDataLoading }}>
            {children}
        </ItemsContext.Provider>
    );
};
