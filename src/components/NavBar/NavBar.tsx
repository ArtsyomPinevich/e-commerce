import './NavBar.scss';
import { useState } from 'react';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useItemContext } from '../../context/ItemsContext';

const Header = () => {
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    const { products } = useItemContext();
    return (
        <header className="header">
            {cartIsOpen ? (
                <div className="user-cart">
                    <h1>user cart</h1>
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
