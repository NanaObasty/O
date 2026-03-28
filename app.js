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
