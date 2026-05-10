import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config.js';
import { rawMenuData, categories } from '../data/menuData.js';

/**
 * A one-time script to migrate local menu data to Firestore.
 * It creates a 'menu' collection, and inside it, a document for each category.
 * Each category document will contain an 'items' array and 'details' object.
 */
export const uploadMenuToFirebase = async () => {
    try {
        console.log("Starting menu migration...");

        for (const category of categories) {
            const categoryId = category.id;
            const items = rawMenuData[categoryId] || [];

            // Reference to the document in the 'menu' collection
            const categoryRef = doc(collection(db, 'menu'), categoryId);

            await setDoc(categoryRef, {
                details: {
                    id: category.id,
                    label: category.label,
                    // We don't store local image paths in DB usually, 
                    // but we can store the ID to map it on the frontend later
                },
                items: items
            });

            console.log(`Successfully uploaded category: ${category.label} with ${items.length} items.`);
        }

        console.log("Migration complete! All menu data is now in Firebase.");
    } catch (error) {
        console.error("Error migrating menu to Firebase:", error);
    }
};
