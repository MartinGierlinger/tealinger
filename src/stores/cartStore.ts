import { persistentMap } from '@nanostores/persistent';
import type { TeaProduct } from '../data/products';

// Definiere die Struktur eines Warenkorb-Items
export type CartItem = {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
};

// Der Store speichert ein Objekt, wobei der Key die Produkt-ID ist
// Das speichert automatisch in localStorage unter dem Key 'cart'
export const cartItems = persistentMap<Record<string, CartItem>>(
    'cart', 
    {}, 
    {
        encode: JSON.stringify,
        decode: JSON.parse
    }
);

// Hilfsfunktion zum Hinzufügen
export function addProductToCart(product: TeaProduct) {
    const current = cartItems.get();
    const existingItem = current[product.id]; // Annahme: TeaProduct hat eine ID

    if (existingItem) {
        cartItems.setKey(product.id, {
            ...existingItem,
            quantity: existingItem.quantity + 1
        });
    } else {
        cartItems.setKey(product.id, {
            id: product.id,
            name: product.name,
            image: product.image, // Pfad anpassen falls nötig
            price: product.price,
            quantity: 1
        });
    }
}

// Hilfsfunktion zum Entfernen
export function removeProductFromCart(id: string) {
    cartItems.setKey(id, undefined); 
}