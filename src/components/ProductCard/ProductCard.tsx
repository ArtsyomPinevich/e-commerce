import './ProductCard.scss';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { toast } from 'react-toastify';
import {
    Card,
    CardHeader,
    Heading,
    ButtonGroup,
    Button,
    Image,
    Text,
    CardBody,
    Stack,
    CardFooter,
    Divider,
} from '@chakra-ui/react';

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
        // <div className="product-card">
        //     <div className="image-wrapper">
        //         <img src={props.image} alt="product photo" />
        //     </div>
        //     <div className="product-info">
        //         <h3>{props.name}</h3>
        //         <p>Price: {props.price}$</p>
        //         <p>rating {props.rating.rate}/5.00</p>
        //         <p>{props.rating.count} reviews</p>
        //         {quantity >= 1 ? (
        //             <p>
        //                 <button
        //                     onClick={() => {
        //                         decreaseCartQuantity(props.id);
        //                         notify(
        //                             'You have removed one piece of this product from your cart!'
        //                         );
        //                     }}
        //                 >
        //                     -1
        //                 </button>
        //                 {quantity}
        //                 <button
        //                     onClick={() => {
        //                         increaseCartQuantity(props.id);
        //                         notify(
        //                             'You have removed one piece of this product from your cart!'
        //                         );
        //                     }}
        //                 >
        //                     +1
        //                 </button>
        //                 <button
        //                     onClick={() => {
        //                         removeFromCart(props.id);
        //                         notify(
        //                             'Нou have completely removed this item from your cart!'
        //                         );
        //                     }}
        //                 >
        //                     removeFromCart
        //                 </button>
        //                 in cart
        //             </p>
        //         ) : null}

        //         <button
        //             className="btn-add-to-cart"
        //             onClick={() => {
        //                 increaseCartQuantity(props.id);
        //                 notify(
        //                     'You have added one piece of this product to your cart!'
        //                 );
        //             }}
        //         >
        //             Add to cart
        //         </button>
        //     </div>
        // </div>
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={props.image}
                    objectFit="contain"
                    align="right"
                    alt={props.name}
                    borderRadius="lg"
                    boxSize="150px"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{props.name}</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text
                        color="blue.600"
                        fontSize="2xl"
                        justifySelf="flex-end"
                    >
                        ${props.price}
                    </Text>
                    <Text>
                        {quantity} in cart
                        <Button
                            onClick={() => {
                                increaseCartQuantity(props.id);
                                notify(
                                    'You have removed one piece of this product from your cart!'
                                );
                            }}
                        >
                            +1
                        </Button>
                        <Button
                            onClick={() => {
                                decreaseCartQuantity(props.id);
                                notify(
                                    'You have removed one piece of this product from your cart!'
                                );
                            }}
                        >
                            -1
                        </Button>
                        <Button
                            onClick={() => {
                                removeFromCart(props.id);
                                notify(
                                    'Нou have completely removed this item from your cart!'
                                );
                            }}
                        >
                            removeFromCart
                        </Button>
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => {
                            increaseCartQuantity(props.id);
                            notify(
                                'You have added one piece of this product to your cart!'
                            );
                        }}
                    >
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
