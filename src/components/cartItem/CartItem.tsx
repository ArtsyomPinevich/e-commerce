import { useItemContext } from '../../context/ItemsContext';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import {
    CloseButton,
    Flex,
    Image,
    Card,
    Heading,
    Text,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { formatCurrency } from '../../utils/currencyFormat';

interface ICartItem {
    id: number;
    quantity: number;
}

interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    rating: object;
    category: string;
}

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

const CartItem = ({ id, quantity }: ICartItem) => {
    const { products }: any = useItemContext();
    const { removeFromCart } = useShoppingCart();

    const item = products.find((i: Item) => i.id === id);

    if (item == null) {
        return null;
    }

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow="hidden"
            variant="outline"
            padding="2"
            marginBottom="8"
        >
            <Flex justify="center">
                <Image
                    src={item.image}
                    objectFit="contain"
                    alt={item.title}
                    borderRadius="lg"
                    boxSize="150px"
                />
            </Flex>
            <Flex justifyContent="space-between" flex="1">
                <Flex direction="column">
                    <Heading size="lg">{item.title}</Heading>
                    <Text>Quantity: {quantity}</Text>
                    <Text>
                        Price:{' '}
                        <Text as="span" color="blue.600" fontSize="2xl">
                            {formatCurrency(quantity * item.price)}
                        </Text>
                    </Text>
                </Flex>
                <Flex>
                    <CloseButton
                        onClick={() => {
                            removeFromCart(id);
                            notify(
                                'Нou have completely removed this item from your cart!'
                            );
                        }}
                    />
                </Flex>
            </Flex>
        </Card>
    );
};

export default CartItem;
