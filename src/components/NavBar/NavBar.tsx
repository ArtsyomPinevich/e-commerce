import './NavBar.scss';
import { useState } from 'react';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../cartItem/CartItem';

const Header = () => {
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    const { cartTotalQuantity, cartItems } = useShoppingCart();
    return (
        <header className="header">
            {cartIsOpen ? (
                <div className="user-cart">
                    <h1>user cart</h1>
                    <div className="user-cart__items-container">
                        {cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />;
                        })}
                    </div>
                    <h3>total quantity {cartTotalQuantity}</h3>
                    <button onClick={() => setCartIsOpen(false)}>close</button>
                </div>
            ) : null}
            <div className="header__searchbar-container">
                <form className="header__searchbar">
                    <IoSearchOutline />
                    <input type="text" placeholder="Search item" />
                </form>
            </div>

            <div className="header__userCart">
                <button onClick={() => setCartIsOpen(true)}>
                    <IoCartOutline />
                    <span>user cart</span>
                </button>
            </div>
        </header>
    );
};

export default Header;
