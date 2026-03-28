// products.js - The "Brain" of QuickTrade.gh
const ghanaProducts = [
    { 
     { 
        id: 1, 
        name: "Kente Print Summer Dress", 
        category: "Dresses", 
        price: 250, 
        location: "Koforidua", 
        inStock: true,
        // FIXED: Direct Image Link
        image: "https://i.pinimg.com/736x/01/91/92/019192807f66e0019482598379689081.jpg", 
        description: "Beautiful authentic Kente print. Perfect for church or weddings. Size: Medium." 
    },
    { 
        id: 2, 
        name: "Handmade Leather Sandals", 
        category: "Sandals", 
        price: 120, 
        location: "Kumasi", 
        inStock: true,
        // FIXED: Direct Image Link
        image: "https://i.pinimg.com/736x/1a/6b/55/1a6b556565104270678d214f4e1f5e5e.jpg", 
        description: "Durable Northern Region leather. Very comfortable for daily use."
    } // <--- I added this bracket and comma back in!
    { 
      }, // <--- This comma MUST be here after ID 2
    { 
        id: 3, 
        name: "Official Men's Shoes", 
        category: "Shoes", 
        price: 450, 
        location: "Accra", 
        inStock: true,
        // FIXED: Direct Image Address (Not the Pinterest page)
        image: "https://i.pinimg.com/736x/8d/6d/f4/8d6df42151407703716a41416e788812.jpg", 
        description: "Genuine black leather, perfect for office or formal events." 
    }
    // If you add ID 4, put a comma right here -> ,
];
