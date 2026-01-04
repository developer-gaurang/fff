document.addEventListener('DOMContentLoaded', () => {
    const regForm = document.getElementById('regForm');
    const formUI = document.getElementById('form-ui');
    const successUI = document.getElementById('success-ui');
    const submitBtn = document.getElementById('submitBtn');

    regForm.addEventListener('submit', (e) => {
        // Prevent the page from reloading
        e.preventDefault();

        // Change button state
        submitBtn.textContent = 'Creating Account...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        // Simulate a network request (1.5 seconds)
        setTimeout(() => {
            // Hide the form and show the success message
            formUI.classList.add('hidden');
            successUI.classList.remove('hidden');

            // Log data for testing
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            };
            console.log("Registration Success:", formData);
            
        }, 1500);
    });
});