// scripts.js

// Function to change background color randomly
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Function to create a bouncing effect on elements
function bounceElements() {
    const elements = document.querySelectorAll('.bounce');
    elements.forEach(element => {
        element.style.transition = 'transform 0.5s';
        element.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
        }, 500);
    });
}

// Event listener to change background color every 3 seconds
setInterval(changeBackgroundColor, 3000);

// Call bounce function on page load
window.onload = bounceElements;