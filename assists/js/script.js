document.addEventListener('DOMContentLoaded', () => {
    // Login Logic
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Redirecting ${email} to the dashboard...`);
    });

    // Subscription Logic
    const subBtn = document.getElementById('subBtn');
    subBtn.addEventListener('click', () => {
        const email = document.getElementById('subEmail').value;
        if (email.includes('@')) {
            alert("Subscription successful! Welcome to the TechFlow community.");
            document.getElementById('subEmail').value = '';
        } else {
            alert("Please enter a valid email address.");
        }
    });
});