// Function to update the clock every second
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // If hours is 0, set it to 12 (for midnight and noon)

    // Update the clock display in the HTML
    document.getElementById('clock-hours').textContent = hours;
    document.getElementById('clock-minutes').textContent = minutes;
    document.getElementById('clock-seconds').textContent = seconds;
    document.getElementById('time-label').textContent = ampm;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
