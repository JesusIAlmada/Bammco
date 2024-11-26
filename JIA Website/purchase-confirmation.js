// Function to create confetti elements
function createConfetti() {
    const colors = ['#ff0', '#ff6347', '#32cd32', '#00f', '#ff1493'];
    const confettiContainer = document.getElementById('confetti-container');

    // Create a random number of confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 5 + 5; // Random size between 5 and 10
        const left = Math.random() * 100; // Random position from 0% to 100% of the screen width
        const animationDuration = Math.random() * 2 + 3; // Random duration for falling (between 3 and 5 seconds)

        confetti.style.position = 'absolute';
        confetti.style.top = '0';
        confetti.style.left = `${left}%`;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = '0.8';
        confetti.style.animation = `fall ${animationDuration}s linear infinite`;

        confettiContainer.appendChild(confetti);
    }
}

// Define the confetti falling animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    @keyframes fall {
        0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`, styleSheet.cssRules.length);

// Trigger the confetti animation on page load
window.onload = () => {
    createConfetti();
};
