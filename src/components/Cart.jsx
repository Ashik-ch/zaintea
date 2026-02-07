import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Plus, Minus, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, totalItems, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(!isOpen);

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) return;

        let message = `Hi ZAINTEA ☕\nI would like to place an order.\n\nOrder Details:\n`;

        cartItems.forEach(item => {
            const variantText = item.selectedVariant ? ` (${item.selectedVariant.name})` : '';
            message += `• ${item.name}${variantText} × ${item.quantity}\n`;
        });

        message += `\nPlease confirm availability and total price in whatsapp.\nThank you.`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/971501229617?text=${encodedMessage}`, '_blank');
    };

    return (
        <>
            {/* Floating Cart Button */}
            <motion.button
                onClick={toggleCart}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 bg-zain-red text-white p-4 rounded-full shadow-lg border-2 border-zain-gold flex items-center justify-center group"
            >
                <ShoppingCart size={28} />
                <AnimatePresence>
                    {totalItems > 0 && (
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute -top-2 -right-2 bg-zain-gold text-black font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center border border-black"
                        >
                            {totalItems}
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Cart Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleCart}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-zain-dark border-l border-zain-red/20 z-[60] shadow-2xl flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
                                <h2 className="text-3xl font-display font-bold text-zain-gold">YOUR ORDER</h2>
                                <button onClick={toggleCart} className="text-white/50 hover:text-white transition-colors">
                                    <X size={28} />
                                </button>
                            </div>

                            {/* Cart Items */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                {cartItems.length === 0 ? (
                                    <div className="flex flex-col items-center justify-center h-full text-white/30 space-y-4">
                                        <ShoppingCart size={64} strokeWidth={1} />
                                        <p className="font-sans text-lg">Your cart is empty</p>
                                    </div>
                                ) : (
                                    cartItems.map((item) => (
                                        <motion.div
                                            key={item.cartItemId}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4"
                                        >
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg text-zain-beige leading-tight">
                                                    {item.name}
                                                    {item.selectedVariant && <span className="text-zain-gold text-sm ml-2 font-normal">({item.selectedVariant.name})</span>}
                                                </h3>
                                                <p className="text-sm text-white/40 mt-1">{item.finalPrice}</p>
                                            </div>

                                            <div className="flex flex-col items-end gap-3 justify-between">
                                                <div className="flex items-center gap-3 bg-black/40 rounded-lg p-1">
                                                    <button
                                                        onClick={() => item.quantity === 1 ? removeFromCart(item.cartItemId) : updateQuantity(item.cartItemId, -1)}
                                                        className="w-7 h-7 flex items-center justify-center text-zain-red hover:bg-white/10 rounded transition-colors"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="font-bold w-4 text-center text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.cartItemId, 1)}
                                                        className="w-7 h-7 flex items-center justify-center text-green-400 hover:bg-white/10 rounded transition-colors"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                )}
                            </div>

                            {/* Footer */}
                            <div className="p-6 bg-black/40 border-t border-white/10 space-y-4">
                                {cartItems.length > 0 && (
                                    <div className="space-y-4">
                                        <p className="text-xs text-center text-white/30">
                                            Prices are approximate. Final total confirmed via WhatsApp.
                                        </p>
                                        <button
                                            onClick={handlePlaceOrder}
                                            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-900/20 active:scale-95"
                                        >
                                            <MessageCircle size={24} />
                                            <span>ORDER VIA WHATSAPP</span>
                                        </button>
                                        <button
                                            onClick={clearCart}
                                            className="w-full text-sm text-zain-red hover:text-red-400 transition-colors"
                                        >
                                            Clear Cart
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;
