const sellerForm = document.querySelector('form');
const submitBtn = document.getElementById('submit-btn');
const btnText = document.getElementById('btn-text');
const btnSpinner = document.getElementById('btn-spinner');

sellerForm.addEventListener('submit', function() {
    // 1. Disable the button so they can't click twice
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

    // 2. Hide "Submit" text and show the Spinner
    btnText.innerText = "Sending Application...";
    btnSpinner.classList.remove('hidden');
});
// Show the flyer as a popup when the page loads
window.onload = function() {
    const flyer = document.getElementById('flyer-container');
    
    // Create a dark background overlay
    const overlay = document.createElement('div');
    overlay.className = "fixed inset-0 bg-black bg-opacity-80 z-[10000] flex items-center justify-center p-4";
    overlay.id = "flyer-overlay";
    
    // Move the flyer inside the overlay
    overlay.appendChild(flyer);
    document.body.appendChild(overlay);

    // Add a "Close" button to the flyer
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = "× Close & Start Shopping";
    closeBtn.className = "absolute -top-10 right-0 text-white font-bold text-lg";
    closeBtn.onclick = function() {
        document.body.removeChild(overlay);
    };
    flyer.style.position = "relative";
    flyer.appendChild(closeBtn);
};
let currentSlide = 0;
const slides = document.getElementById('slider-container');
const dots = document.querySelectorAll('.dot');
const totalSlides = 3;

function showSlide(index) {
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;
    const ghanaProducts = [
    { 
        id: 1, 
        name: "Elegant Kente Gown", 
        category: "Dresses", 
        price: 450, 
        location: "Accra", 
        // Notice the 'w_500' in the link for speed!
        image: "https://res.cloudinary.com/yourname/image/upload/w_500,c_fill/v1/kente-dress.jpg" 
    },
    { 
        id: 2, 
        name: "Gentleman's Suede Shoes", 
        category: "Shoes", 
        price: 320, 
        location: "K-dua", 
        image: "https://res.cloudinary.com/yourname/image/upload/w_500,c_fill/v1/suede-shoes.jpg" 
    }
];

    // Move the container
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update Dots
    dots.forEach((dot, i) => {
        dot.style.opacity = i === currentSlide ? "1" : "0.5";
    });
}

// Auto-play every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
// Check if a user is logged in
firebase.auth().onAuthStateChanged((user) => {
    const banner = document.getElementById('user-banner');
    const callout = document.getElementById('login-callout');
    const userEmail = document.getElementById('user-email');

    if (user) {
        // USER IS LOGGED IN
        banner.classList.remove('hidden');
        callout.classList.add('hidden');
        userEmail.innerText = user.email;
    } else {
        // USER IS NOT LOGGED IN
        banner.classList.add('hidden');
        callout.classList.remove('hidden');
    }
});

// Logout Function
function logout() {
    firebase.auth().signOut().then(() => {
        window.location.reload();
    });
}
// Inside your displayProducts function, update the HTML generation:
container.innerHTML += `
    <div class="product-card bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <img src="${product.image}" class="w-full h-48 object-cover rounded-xl mb-3">
        <h3 class="font-bold text-gray-800 text-sm">${product.name}</h3>
        <p class="text-blue-600 font-black mb-3 text-lg">GH₵ ${product.price}</p>
        
        <a href="details.html?id=${product.id}" class="block text-center w-full py-2 bg-gray-100 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-200 transition">
            View Details
        </a>
    </div>
`;
