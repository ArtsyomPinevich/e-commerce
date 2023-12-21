import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useItemContext } from '../../context/ItemsContext';

import './Products.scss';

const Products = ({ selectedCathegory }) => {
    interface Item {
        id: number;
        title: string;
        description: string;
        price: number;
        image: string;
        rating: object;
        category: string;
    }

    const selectedItems = selectedCathegory;

    // const [products, setProducts] = useState<Item[]>([]);
    const { products, qweqwqeqweqweqweqw } = useItemContext();
    console.log(qweqwqeqweqweqweqw);

    const filterByCathegory = (products: Item, selectedItems: string) => {
        return selectedItems.length === 0
            ? products
            : products.filter((product: Item) =>
                  selectedItems.includes(product.category)
              );
    };

    const filteredItems = filterByCathegory(products, selectedItems);
    useEffect(() => {
        console.log(filteredItems);
    }, [filteredItems]);

    return (
        <div className="products-section">
            {filteredItems.map(
                ({
                    id,
                    title,
                    description,
                    price,
                    image,
                    rating,
                    category,
                }: Item) => {
                    return (
                        <ProductCard
                            key={id}
                            id={id}
                            description={description}
                            name={title}
                            price={price}
                            image={image}
                            rating={rating}
                            category={category}
                        />
                    );
                }
            )}
        </div>
    );
};

export default Products;
