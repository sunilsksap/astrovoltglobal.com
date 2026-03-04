// Function to handle page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// Update Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Lucide Icons
lucide.createIcons();

// Simple Solar Background Movement
const solarBg = document.getElementById('solarBg');
let pos = 50;
let direction = 1;

setInterval(() => {
    pos += 0.05 * direction;
    if (pos > 52 || pos < 48) direction *= -1;
    solarBg.style.backgroundPosition = `${pos}% ${100 - pos}%`;
}, 50);