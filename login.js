// Toggle Between Login and Sign Up Forms
document.getElementById('show-signup').addEventListener('click', () => {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Handle Login Form Submission
document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email.trim() !== "" && password.trim() !== "") {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Please enter both email and password.');
    }
});

// Handle Sign Up Form Submission
document.getElementById('signup').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
        alert('Sign-up successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Please fill in all fields.');
    }
});


