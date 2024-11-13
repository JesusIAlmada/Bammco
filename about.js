// about.js

// Array of random quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "In the middle of every difficulty lies opportunity. – Albert Einstein",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "It does not matter how slowly you go as long as you do not stop. – Confucius",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "It always seems impossible until it's done. – Nelson Mandela"
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = `
        <h2 class="greeting-message">Good Afternoon!</h2>
        <p>"${randomQuote}"</p>
    `;
}

// Call the function to display a random quote
displayRandomQuote();

// 2. Toggle Dark Mode
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Toggle the icon between sun and moon
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.innerText = "🌞"; // Sun for light mode
    } else {
        darkModeToggle.innerText = "🌙"; // Moon for dark mode
    }
});

// 3. Hover Effect on Links
const links = document.querySelectorAll(".menu a");
links.forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#f4a261"; // Change color on hover
    });
    link.addEventListener("mouseout", () => {
        link.style.color = ""; // Revert to default color
    });
});
