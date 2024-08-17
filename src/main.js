document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links ul');
  
    toggleButton.addEventListener('click', () => {
      navbarLinks.classList.toggle('show');
    });
  });
function updateClock() {
    // Create a new Date object and set it to Kolkata timezone using UTC offset (+5:30)
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000; // Offset in milliseconds
    const kolkataOffset = 5.5 * 60 * 60000; // +5:30 hours in milliseconds
    const kolkataTime = new Date(now.getTime() + utcOffset + kolkataOffset);

    const hours = kolkataTime.getHours().toString().padStart(2, '0');
    const minutes = kolkataTime.getMinutes().toString().padStart(2, '0');
    const seconds = kolkataTime.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const day = kolkataTime.getDate().toString().padStart(2, '0');
    const month = kolkataTime.toLocaleString('default', { month: 'long' });
    const year = kolkataTime.getFullYear();
    const dateString = `${month} ${day}, ${year}`;

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Initial call to display the time immediately, followed by updates every second
updateClock();
setInterval(updateClock, 1000);
const greetingElement = document.getElementById('greeting');
const changeGreetingBtn = document.getElementById('changeGreetingBtn');

const greetings = [
    "Good Morning!",
    "Good Afternoon!",
    "Good Evening!",
    "Hello!",
    "Welcome!",
    "Have a great day!"
];

let currentGreetingIndex = 0;

// Function to display the current greeting with animation
function displayGreeting() {
    greetingElement.style.opacity = 0;
    setTimeout(() => {
        greetingElement.textContent = greetings[currentGreetingIndex];
        greetingElement.style.animation = 'fadeIn 2s forwards';
    }, 500);
}

// Change greeting on button click
changeGreetingBtn.addEventListener('click', () => {
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
    displayGreeting();
});

// Display the initial greeting
displayGreeting();

// new code

