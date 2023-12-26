import './NavBar.scss';
import { useState } from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useItemContext } from '../../context/ItemsContext';
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
    Input,
    Heading,
    Alert,
    AlertTitle,
    AlertDescription,
    AlertIcon,
} from '@chakra-ui/react';

type cartItemType = {
    id: number;
    quantity: number;
};

const Header = () => {
    const { cartTotalQuantity, cartItems, removeAllFromCart } =
        useShoppingCart();
    //to do fix
    const { products }: any = useItemContext();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

    const setAlertVisibility = () => {
        if (cartItems.length >= 1) {
            removeAllFromCart();

            setIsAlertVisible(true);
            setTimeout(() => {
                setIsAlertVisible(false);
            }, 4000);
        } else {
            return;
        }
    };

    return (
        <header className="header">
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                size="lg"
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
                        <Heading size="lg">
                            Total Price:
                            {cartItems.reduce((total, cartItems) => {
                                const item = products.find(
                                    (i: cartItemType) => i.id === cartItems.id
                                );
                                return (
                                    total +
                                    (item?.price || 0) * cartItems.quantity
                                );
                            }, 0)}
                            $
                        </Heading>
                    </DrawerBody>

                    <DrawerFooter flexDirection="column">
                        <Alert
                            display={isAlertVisible ? 'block' : 'none'}
                            status="success"
                            variant="subtle"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            height="200px"
                        >
                            <AlertIcon boxSize="40px" mr={0} />
                            <AlertTitle mt={4} mb={1} fontSize="lg">
                                Order completed!
                            </AlertTitle>
                            <AlertDescription maxWidth="sm">
                                Thanks for your order!
                            </AlertDescription>
                        </Alert>

                        <Button
                            marginTop="3"
                            colorScheme="blue"
                            onClick={() => setAlertVisibility()}
                        >
                            Complete order
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <div className="header__searchbar-container">
                <Input type="text" placeholder="Search item" />
            </div>

            <div className="header__userCart">
                <Button colorScheme="teal" onClick={onOpen}>
                    Open Cart
                </Button>
            </div>
        </header>
    );
};

export default Header;
