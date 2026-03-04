// Initialize Lucide Icons
lucide.createIcons();

// Page Navigation Logic
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Close mobile menu if open
    const navLinks = document.getElementById('navLinks');
    if (navLinks.classList.contains('mobile-active')) {
        toggleMenu();
    }

    window.scrollTo(0, 0);
}

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuIcon = document.getElementById('menuIcon');
    
    navLinks.classList.toggle('mobile-active');
    
    const isOpen = navLinks.classList.contains('mobile-active');
    menuIcon.setAttribute('data-lucide', isOpen ? 'x' : 'menu');
    
    lucide.createIcons(); // Refresh icons
}

// Set Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();