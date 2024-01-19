import { useShoppingCart } from '../../context/ShoppingCartContext';
import { toast } from 'react-toastify';
import {
    Card,
    Heading,
    Button,
    Image,
    Text,
    CardBody,
    CardFooter,
    Divider,
    Flex,
} from '@chakra-ui/react';
import { formatCurrency } from '../../utils/currencyFormat';

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
            autoClose: 1000,
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
                        loading="lazy"
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
                            {formatCurrency(props.price)}
                        </Text>
                    </Flex>
                </Flex>
            </CardBody>
            <Divider />

            <CardFooter flexDirection="column">
                <Text fontSize="2xl" display="flex" alignItems="center">
                    {quantity} in cart
                    <Button
                        marginLeft={2}
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
                            {
                                quantity > 0 &&
                                    notify(
                                        'You have removed one piece of this product from your cart!'
                                    );
                            }
                        }}
                    >
                        -1
                    </Button>
                </Text>
                <Flex
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    flex="1"
                    marginTop={2}
                >
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
                    {quantity > 0 && (
                        <Button
                            variant="solid"
                            colorScheme="red"
                            onClick={() => {
                                removeFromCart(props.id);
                            }}
                        >
                            removeFromCart
                        </Button>
                    )}
                </Flex>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
