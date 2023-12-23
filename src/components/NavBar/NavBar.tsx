import './NavBar.scss';
import { useState, useRef } from 'react';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import CartItem from '../cartItem/CartItem';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text,
} from '@chakra-ui/react';

const Header = () => {
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    const { cartTotalQuantity, cartItems } = useShoppingCart();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    return (
        <header className="header">
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="lg"
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your cart</DrawerHeader>

                    <DrawerBody>
                        {cartItems.map((item) => {
                            return <CartItem key={item.id} {...item} />;
                        })}
                        <Text>total quantity {cartTotalQuantity}</Text>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button colorScheme="blue">Complete order</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <div className="header__searchbar-container">
                <form className="header__searchbar">
                    <IoSearchOutline />
                    <input type="text" placeholder="Search item" />
                </form>
            </div>

            <div className="header__userCart">
                <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                    Open Cart
                </Button>
            </div>
        </header>
    );
};

export default Header;
