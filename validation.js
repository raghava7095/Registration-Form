document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Username validation
    if (username === '') {
        alert('Please enter a username.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If all validations pass, submit the form
    alert('Registration successful!');
    this.submit();
});