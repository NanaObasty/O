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
