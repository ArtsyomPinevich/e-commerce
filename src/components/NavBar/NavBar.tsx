import React from 'react';
import './NavBar.scss';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <header className="header">
            <div className="header__searchbar-container">
                <form className="header__searchbar">
                    <IoSearchOutline />
                    <input type="text" placeholder="Search item" />
                </form>
            </div>

            <div className="Header__userCart">
                <button>
                    <IoCartOutline />
                    user cart
                </button>
            </div>
        </header>
    );
};

export default Header;
