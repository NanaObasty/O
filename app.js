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
// Add this below your existing product display logic
function showRelatedProducts(currentCategory, currentId) {
    const relatedContainer = document.getElementById('related-grid');
    
    // Filter items: Same category but NOT the one we are currently viewing
    const relatedItems = ghanaProducts.filter(p => p.category === currentCategory && p.id != currentId).slice(0, 4);

    if (relatedItems.length === 0) {
        relatedContainer.innerHTML = "<p class='text-xs text-gray-400'>No similar items found.</p>";
        return;
    }

    relatedItems.forEach(item => {
        relatedContainer.innerHTML += `
            <a href="details.html?id=${item.id}" class="group">
                <div class="aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-2">
                    <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                </div>
                <h4 class="text-[11px] font-bold text-gray-800 line-clamp-1">${item.name}</h4>
                <p class="text-xs font-black text-blue-600">GH₵ ${item.price}</p>
            </a>
        `;
    });
}

// Call the function inside your main 'if (product)' block
if (product) {
    // ... (Your existing code to show the main product) ...
    
    // NEW: Load the related items
    showRelatedProducts(product.category, product.id);
}
<script>
  // 1. Your Firebase Config (Copy-paste the same one from auth.html)
  const firebaseConfig = {
  apiKey: "AIzaSyDynABU6MzF3SJvruoIVKOW6RgC2UbISHs",
  authDomain: "ghana-market-697f9.firebaseapp.com",
  projectId: "ghana-market-697f9",
  storageBucket: "ghana-market-697f9.firebasestorage.app",
  messagingSenderId: "821323194557",
  appId: "1:821323194557:web:4ef214bae4f4923373d7d4",
  measurementId: "G-W8RQK1EFT7"
};
  firebase.initializeApp(firebaseConfig);

  // 2. The script that hides the button if the user is logged in
  firebase.auth().onAuthStateChanged((user) => {
      const loginButton = document.getElementById('login-callout');
      if (user) {
          // If logged in, hide the "Login to Start Selling" button
          loginButton.classList.add('hidden');
          console.log("User is logged in as: " + user.email);
      } else {
          // If not logged in, show the button
          loginButton.classList.remove('hidden');
      }
  });
</script
    firebase.auth().onAuthStateChanged((user) => {
    const loginCallout = document.getElementById('login-callout');
    const sellButton = document.getElementById('sell-now-container');
    const userBanner = document.getElementById('user-banner'); // If you have the top welcome bar

    if (user) {
        // ✅ USER IS LOGGED IN
        loginCallout.classList.add('hidden');    // Hide "Login to Start Selling"
        sellButton.classList.remove('hidden');   // Show "Post an Item to Sell"
        
        if(userBanner) {
            userBanner.classList.remove('hidden');
            document.getElementById('user-email').innerText = user.email;
        }
    } else {
        // ❌ USER IS LOGGED OUT
        loginCallout.classList.remove('hidden'); // Show Login button
        sellButton.classList.add('hidden');      // Hide Sell button
        
        if(userBanner) userBanner.classList.add('hidden');
    }
});
function searchProducts() {
    // This line 'finds' the input box you just pasted above
    const input = document.getElementById('product-search');
    const query = input.value.toLowerCase();
    
    // This line 'finds' where the items are displayed
    const container = document.getElementById('product-grid');

    // Filter logic...
    const filtered = ghanaProducts.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );

    // Redraw the screen
    container.innerHTML = ''; 
    renderItems(filtered); // Or use your loop here
}
