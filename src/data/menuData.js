import menuBurger from '../assets/menu-burger.png';
import menuClub from '../assets/menu-club.png';
import menuPorota from '../assets/menu-porota.png';
import menuGrill from '../assets/grill.jpg';
import teaImage from '../assets/chaya.jpg';

export const categories = [
    { id: 'grill', label: 'GRILL', image: menuGrill },
    { id: 'burgers', label: 'BURGERS', image: menuBurger },
    { id: 'sandwiches', label: 'SANDWICHES', image: menuClub },
    { id: 'club', label: 'CLUB', image: menuClub },
    { id: 'wraps', label: 'WRAPS', image: menuPorota },
    { id: 'porota', label: 'POROTA', image: menuPorota },
    { id: 'rice_noodles', label: 'RICE & NOODLES', image: menuPorota },
    { id: 'beverages', label: 'BEVERAGES', image: teaImage },
    { id: 'juices', label: 'JUICES', image: teaImage },
    { id: 'snacks', label: 'SNACKS', image: menuPorota },
    { id: 'soups', label: 'SOUPS', image: menuGrill }, // Using placeholders if needed
    { id: 'salads', label: 'SALADS', image: menuGrill },
    { id: 'desserts', label: 'DESSERTS', image: teaImage },
    { id: 'mojitos', label: 'MOJITOS', image: teaImage },
];

// Helper to parse price variations
const parseVariants = (priceStr) => {
    if (!priceStr) return [];

    // Clean string
    const prices = priceStr.replace('AED', '').trim().split('/').map(p => p.trim());

    if (prices.length === 1) return null; // Single price

    if (prices.length === 2) {
        return [
            { name: 'Medium', price: prices[0] },
            { name: 'Large', price: prices[1] }
        ];
    }

    if (prices.length === 3) {
        return [
            { name: 'Small', price: prices[0] },
            { name: 'Medium', price: prices[1] },
            { name: 'Large', price: prices[2] }
        ];
    }

    return null;
};

const rawMenuData = {
    grill: [
        { name: 'Grill Chicken (Full)', price: 'AED 30', desc: 'With a Soup, Saladm Hammus, Garlic, French Fries' },
        { name: 'Grill Chicken (Half)', price: 'AED 19', desc: 'With a Soup, Saladm Hammus, Garlic, French Fries' },
        { name: 'Grill Chicken With Rice (Full)', price: 'AED 42', desc: 'Rice Served with a Soup, Raitha, Tomato, Salad' },
        { name: 'Grill Chicken With Rice (Half)', price: 'AED 22', desc: 'Rice Served with a Soup, Raitha, Tomato, Salad' },
    ],
    burgers: [
        { name: 'Zain Special Burger', price: 'AED 14', desc: 'Double patty, cheese overload' },
        { name: 'Classic Beef', price: 'AED 10', desc: 'Angus beef, fresh lettuce, tomato' },
        { name: "Chicken Burger", price: "AED 8" },
        { name: "Zinger Burger", price: "AED 10" },
        { name: "Veg Burger", price: "AED 10" },
        { name: "Grilled Beef Burger", price: "AED 14" },
        { name: "Grilled Chicken Burger", price: "AED 14" },
        { name: "Double Burger", price: "AED 14" }
    ],
    starters: [
        { name: "Zain Special Soup", price: "AED 6" },
        { name: "Chicken 65", price: "AED 15" }
        { name: "Chicken Popcorn", price: "AED 14" }
    ],

    rice_noodles: [
        { name: "Chicken Fried Rice", price: "AED 15" },
        { name: "Egg Fried Rice", price: "AED 14" },
        { name: "Veg Fried Rice", price: "AED 14" },
        { name: "Chicken Noodles", price: "AED 16" },
        { name: "Veg Noodles", price: "AED 15" },
        { name: "Egg Noodles", price: "AED 15" },
    ],
    wraps: [
        { name: "Zinger Wrap", price: "AED 12" },
        { name: "Shish Tawook Wrap", price: "AED 12" },
        { name: "Tikka Wrap", price: "AED 12" },
        { name: "Vegetable Wrap", price: "AED 12" }
    ],

    juices: [
        { id: 1, name: "Avocado", price: "AED 08/10/12" },
        { id: 2, name: "Mango", price: "AED 08/10/12" },
        { id: 3, name: "Chikoo", price: "AED 08/10/12" },
        { id: 4, name: "Kiwi", price: "AED 08/10/12" },
        { id: 7, name: "Watermelon", price: "AED 06/08/10" },
        { id: 10, name: "Banana", price: "AED 07/10" },
        { id: 14, name: "Orange", price: "AED 08/10/12" },
        { id: 17, name: "Carrot", price: "AED 08/10/12" },
        { id: 32, name: "Zain Special Juice", price: "AED 13" },
    ],

    desserts: [
        { id: 45, name: "Strawberry Sundae", price: "AED 10" },
        { id: 46, name: "Choco Nut Sundae", price: "AED 10" },
        { id: 47, name: "Falooda", price: "AED 12/14" },
        { id: 52, name: "Fruit Salad", price: "AED 12" },
    ],

    mojitos: [
        { id: 67, name: "Passion Mojito", price: "AED 12" },
        { id: 70, name: "Blue Lagoon Mojito", price: "AED 12" },
        { id: 73, name: "Strawberry Mojito", price: "AED 12" }
    ],
    sandwiches: [
        { id: 147, name: 'Egg Slice ', price: 'AED 5', desc: 'Fresh egg slices with soft bread' },
        { id: 148, name: 'Chicken Slice ', price: 'AED 5', desc: 'Chicken slices with classic seasoning' },
        { id: 149, name: 'Hotdog Slice', price: 'AED 5', desc: 'Juicy hotdog with sauce' },
        { id: 150, name: 'Veg Slice ', price: 'AED 6', desc: 'Mixed vegetable slices with light spread' },
        { id: 151, name: 'Chicken Sandwich', price: 'AED 6', desc: 'Signature chicken sandwich' },
        { id: 152, name: 'Francisco Sandwich', price: 'AED 8', desc: 'Special Francisco-style filling' },
        { id: 153, name: 'Vegetable Sandwich', price: 'AED 5', desc: 'Fresh vegetables with mild seasoning' },
        { id: 154, name: 'Egg Sandwich', price: 'AED 5', desc: 'Classic egg sandwich' },
        { id: 155, name: 'Beef Sandwich', price: 'AED 6', desc: 'Tender beef with rich flavor' },
        { id: 156, name: 'Hotdog Sandwich', price: 'AED 5', desc: 'Hotdog with soft bun and sauce' }
    ],

    club: [
        { id: 111, name: 'Zain Special Club', price: 'AED 15', desc: 'House special club sandwich' },
        { id: 112, name: 'Lulu Club', price: 'AED 15', desc: 'Classic club-style sandwich' },
        { id: 113, name: 'Fantasia Club', price: 'AED 16', desc: 'Premium fantasia-style club sandwich' },
        { id: 114, name: 'Kabab Tikka Club', price: 'AED 14', desc: 'Spicy kabab tikka filling' },
        { id: 115, name: 'Zinger Club', price: 'AED 14', desc: 'Crispy zinger chicken club' },
        { id: 116, name: 'Zinger Classic', price: 'AED 12', desc: 'Classic crispy zinger sandwich' },
        { id: 117, name: 'Egg Club', price: 'AED 10', desc: 'Egg-based club sandwich' },
        { id: 118, name: 'Vegetable Club', price: 'AED 12', desc: 'Fresh mixed vegetable club sandwich' },
        { id: 119, name: 'Chicken Club', price: 'AED 12', desc: 'Classic chicken club sandwich' }
    ],

    porota: [
        { id: 122, name: 'Zain Special Poratta', price: 'AED 10', desc: 'Special poratta with signature filling' },
        { id: 123, name: 'Zinger Poratta', price: 'AED 10', desc: 'Crispy zinger wrapped in poratta' },
        { id: 124, name: 'Chicken Fillet Poratta', price: 'AED 10', desc: 'Juicy chicken fillet with soft poratta' },
        { id: 125, name: 'Chicken Nuggets Poratta', price: 'AED 10', desc: 'Crunchy nuggets wrapped in poratta' },
        { id: 126, name: 'Kabab Poratta', price: 'AED 10', desc: 'Spiced kabab with layered poratta' },

        { id: 127, name: 'Egg Poratta', price: 'AED 4', desc: 'Simple egg poratta' },
        { id: 128, name: 'Hotdog Poratta', price: 'AED 5', desc: 'Hotdog wrapped in poratta' },
        { id: 129, name: 'Omelette Poratta', price: 'AED 4', desc: 'Classic omelette poratta' },
        { id: 130, name: 'Veg Poratta', price: 'AED 6', desc: 'Mixed vegetable poratta' },
        { id: 131, name: 'Falafel Poratta', price: 'AED 5', desc: 'Falafel wrap in poratta' },
        { id: 132, name: 'Chicken Chilli Poratta', price: 'AED 5', desc: 'Spicy chicken chilli filling' },
        { id: 133, name: 'Onion Chips Poratta', price: 'AED 4', desc: 'Crispy onion chips inside poratta' },
        { id: 134, name: 'Beef Poratta', price: 'AED 7', desc: 'Tender beef wrapped in poratta' }
    ],
};

// Process data to include variants and base prices
export const menuData = Object.fromEntries(
    Object.entries(rawMenuData).map(([category, items]) => [
        category,
        items.map(item => {
            const variants = parseVariants(item.price);
            return {
                ...item,
                variants,
                basePrice: variants ? null : item.price // If variants exist, basePrice is determined by selection
            };
        })
    ])
);
