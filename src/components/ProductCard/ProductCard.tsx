import './ProductCard.scss';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { toast } from 'react-toastify';

const ProductCard = (props: any) => {
    const {
        cartTotalQuantity,
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();

    const notify = (toastDescription: string) => {
        toast.success(toastDescription, {
            position: 'top-left',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    const quantity = getItemQuantity(props.id);
    return (
        <div className="product-card">
            <div className="image-wrapper">
                <img src={props.image} alt="product photo" />
            </div>
            <div className="product info">
                <h3>{props.name}</h3>
                <p>Price: {props.price}$</p>
                <p>rating {props.rating.rate}/5.00</p>
                <p>{props.rating.count} reviews</p>
                <p>{quantity} in cart </p>
                <button
                    onClick={() => {
                        increaseCartQuantity(props.id);
                        notify(
                            'You have added one piece of this product to your cart!'
                        );
                    }}
                >
                    Add to cart
                </button>
                <button
                    onClick={() => {
                        decreaseCartQuantity(props.id);
                        notify(
                            'You have removed one piece of this product from your cart!'
                        );
                    }}
                >
                    -1
                </button>
                <button
                    onClick={() => {
                        removeFromCart(props.id);
                        notify(
                            'Нou have completely removed this item from your cart!'
                        );
                    }}
                >
                    removeFromCart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
