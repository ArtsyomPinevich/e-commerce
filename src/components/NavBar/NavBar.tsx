import React from 'react';
import './NavBar.scss';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__searchbar'>
                <input type='text' placeholder='Search item' />
                <button>
                    <IoSearchOutline />
                </button>
            </div>

            <div className='Header__userCart'>
                <button>
                    <IoCartOutline />
                    user cart
                </button>
            </div>
        </header>
    );
};

export default Header;
