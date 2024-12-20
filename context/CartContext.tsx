"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

interface CartContextType {
    cart: Product[];
    deliveryFee: number;
    setDeliveryFee: (fee: number) => void;
    addToCart: (product: Product) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Lazy initialization of cart from localStorage
    const [cart, setCart] = useState<Product[]>(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            return storedCart ? JSON.parse(storedCart) : [];
        }
        return [];
    });
    const [deliveryFee, setDeliveryFee] = useState(0);

    // Save cart to localStorage whenever the cart state changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, deliveryFee, addToCart, removeFromCart, updateQuantity, setDeliveryFee }}>
            {children}
        </CartContext.Provider>
    );
};
