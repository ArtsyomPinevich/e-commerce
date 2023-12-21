import React from 'react';
import { useItemContext } from '../../context/ItemsContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';

const CartItem = ({ id, quantity }) => {
    const { products } = useItemContext();
    const { removeFromCart } = useShoppingCart();

    const item = products.find((i) => i.id === id);

    if (item == null) {
        return null;
    }

    return (
        <div className="user-cart__item">
            <div className="user-cart__item-img-wrapper">
                <img src={item.image} alt="" />
            </div>
            <div className="user-cart__item-description">
                <h3>{item.title}</h3>
                <p>{quantity}</p>
                <button onClick={() => removeFromCart(id)}>Delete</button>
            </div>
        </div>
    );
};

export default CartItem;
