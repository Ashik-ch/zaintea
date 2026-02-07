import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Load cart from local storage on mount (optional, good UX)
    useEffect(() => {
        const savedCart = localStorage.getItem('zaintea_cart');
        if (savedCart) {
            try {
                setCartItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save cart to local storage when changed
    useEffect(() => {
        localStorage.setItem('zaintea_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item, quantity = 1, variant = null) => {
        setCartItems(prev => {
            // Create a unique ID for the item + variant combination
            const cartItemId = item.id ? `${item.id}-${variant?.name || 'default'}` : `${item.name}-${variant?.name || 'default'}`;

            const existingItemIndex = prev.findIndex(i => i.cartItemId === cartItemId);

            if (existingItemIndex > -1) {
                // Update quantity if exists
                const newCart = [...prev];
                newCart[existingItemIndex].quantity += quantity;
                return newCart;
            } else {
                // Add new item
                return [...prev, {
                    ...item,
                    cartItemId,
                    quantity,
                    selectedVariant: variant,
                    // Use variant price if available, else item price
                    finalPrice: variant ? `AED ${variant.price}` : item.price
                }];
            }
        });
    };

    const removeFromCart = (cartItemId) => {
        setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
    };

    const updateQuantity = (cartItemId, delta) => {
        setCartItems(prev => prev.map(item => {
            if (item.cartItemId === cartItemId) {
                const newQuantity = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQuantity };
            }
            return item;
        }));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};
