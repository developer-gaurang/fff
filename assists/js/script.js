document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeBtn.querySelector('i');

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // Form animation logic
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.innerHTML = 'Processing... <i class="fas fa-spinner fa-spin"></i>';
        setTimeout(() => {
            alert("Secure Access Granted!");
            btn.innerHTML = 'Sign In <i class="fas fa-arrow-right"></i>';
        }, 1500);
    });
});