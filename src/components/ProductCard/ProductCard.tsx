import { useShoppingCart } from '../../context/ShoppingCartContext';
import { toast } from 'react-toastify';
import {
    Card,
    Heading,
    ButtonGroup,
    Button,
    Image,
    Text,
    CardBody,
    CardFooter,
    Divider,
    Flex,
} from '@chakra-ui/react';

//to do fix
const ProductCard = (props: any) => {
    const {
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
        <Card maxW="sm">
            <CardBody>
                <Flex justify="center">
                    <Image
                        src={props.image}
                        objectFit="contain"
                        alt={props.name}
                        borderRadius="lg"
                        boxSize="150px"
                    />
                </Flex>
                <Flex mt="6" direction="column" justify="space-between">
                    <Flex direction="column">
                        <Heading size="md">{props.name}</Heading>
                        <Text paddingTop="2" fontSize="md" color="gray.500">
                            {props.description}
                        </Text>
                    </Flex>

                    <Flex direction="column">
                        <Text
                            color="blue.600"
                            fontSize="2xl"
                            justifySelf="flex-end"
                        >
                            ${props.price}
                        </Text>
                        <Text fontSize="2xl">
                            <Button
                                marginRight="5"
                                onClick={() => {
                                    increaseCartQuantity(props.id);
                                    notify(
                                        'You have removed one piece of this product from your cart!'
                                    );
                                }}
                            >
                                +1
                            </Button>
                            {quantity}
                            <Button
                                marginLeft="5"
                                onClick={() => {
                                    decreaseCartQuantity(props.id);
                                    notify(
                                        'You have removed one piece of this product from your cart!'
                                    );
                                }}
                            >
                                -1
                            </Button>{' '}
                            in cart
                        </Text>
                        <Text>
                            <Button
                                marginTop="2"
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
                    </Flex>
                </Flex>
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
