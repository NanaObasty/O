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
