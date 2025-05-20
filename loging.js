document.addEventListener('DOMContentLoaded', function() {
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    
    // Show signup form by default
    signupBtn.classList.add('active');
    
    // Toggle between forms
    signupBtn.addEventListener('click', function() {
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });
    
    loginBtn.addEventListener('click', function() {
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });
    
    // Form submission (basic example)
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Sign up form submitted!');
        // Add your signup logic here
    });
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Login form submitted!');
        // Add your login logic here
    });
});