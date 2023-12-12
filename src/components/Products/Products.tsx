import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import './Products.scss';

const Products = () => {
    interface Item {
        title: string;
        price: number;
        image: string;
        rating: object;
    }

    const [products, setProducts] = useState<Item[]>([]);
    useEffect(() => {
        const FetchData = async () => {
            const data = await fetch('https://fakestoreapi.com/products');
            const json = await data.json();
            setProducts(json);
            console.log(products);
        };

        FetchData();
    }, []);
    return (
        <div className="products-section">
            {products.map(({ title, price, image, rating }) => {
                return (
                    <ProductCard
                        name={title}
                        price={price}
                        image={image}
                        rating={rating}
                    />
                );
            })}
        </div>
    );
};

export default Products;
