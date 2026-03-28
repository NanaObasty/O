function displayProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = ''; // Clear the grid

    // 'ghanaProducts' is the name of the list in your products.js
    ghanaProducts.forEach(product => {
        grid.innerHTML += `
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <img src="${product.image}" class="w-full h-40 object-cover rounded-xl mb-3">
                <h3 class="font-bold text-sm text-gray-800">${product.name}</h3>
                <p class="text-blue-600 font-black text-xs">GH₵ ${product.price}</p>
                <button class="w-full mt-3 py-2 bg-green-500 text-white rounded-lg text-xs font-bold">
                    <i class="fab fa-whatsapp mr-1"></i> Chat Seller
                </button>
            </div>
        `;
    });
}

// RUN THE FUNCTION AUTOMATICALLY
window.onload = displayProducts;
