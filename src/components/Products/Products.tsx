import ProductCard from '../ProductCard/ProductCard';
import { useItemContext } from '../../context/ItemsContext';

import './Products.scss';
//todo fix
const Products = ({ selectedCathegory }: any) => {
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

    //to do fix
    const { products }: any = useItemContext();

    const filterByCathegory = (products: Item[], selectedItems: Item[]) => {
        return selectedItems.length === 0
            ? products
            : //todo fix
              products.filter((product: any) =>
                  selectedItems.includes(product.category)
              );
    };

    const filteredItems = filterByCathegory(products, selectedItems);

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
