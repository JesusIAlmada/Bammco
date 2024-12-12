// Contact form submission event listener
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Prevent form submission for demo purposes
    event.preventDefault();

    // Check if the fields are empty
    if (!name || !email || !message) {
        alert("Please fill in all the fields!");
        return; // Prevent further actions if fields are not filled
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Prevent further actions if email is invalid
    }

    // Show the popup
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Fade out the popup after 3 seconds
    setTimeout(function() {
        popup.classList.remove('show');
    }, 3000);
});

// Character count functionality for the message input field
document.getElementById('message').addEventListener('input', function() {
    const charCount = this.value.length;
    document.getElementById('charCount').innerText = `${charCount}/300 characters used`;
});
