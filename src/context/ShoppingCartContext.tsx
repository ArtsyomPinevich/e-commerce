import { ReactNode, createContext, useContext, useState } from 'react';

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type ShoppingCartContextType = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    removeAllFromCart: () => void;
    cartTotalQuantity: number;
    cartItems: cartItemType[];
};

type cartItemType = {
    id: number;
    quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({
    children,
}: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<cartItemType[]>([]);

    const cartTotalQuantity = cartItems.reduce((quantity, item) => {
        return item.quantity + quantity;
    }, 0);

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id === id)?.quantity === 1) {
                return currItems.filter((item) => item.id !== id);
            } else {
                return currItems.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id);
        });
    };

    const removeAllFromCart = () => {
        setCartItems([]);
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartTotalQuantity,
                cartItems,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                removeAllFromCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
