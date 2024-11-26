// about.js

// Array of random quotes
const quotes = [
    "To be or not to be that is the question. – Hamlet",
    "I love inside jokes. I'd love to be a part of one someday. - Michael Scott",
    "I'm not lazy; I'm just on energy-saving mode. -Jesus Almada",
    "I’m a multitasking ninja—I can waste time, procrastinate, and be unproductive all at once!- Every College Student",
    "Some people graduate with honors; I am just honored to graduate.- Jesus Almada",
    "They say money can’t buy happiness, but it can buy snacks—and that’s basically the same thing.- Jesus Almada",
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
