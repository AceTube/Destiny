// Navigation Toggle for Mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close nav when link clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Section Animation on Scroll
const animatedSections = document.querySelectorAll('.section-animate');
function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    animatedSections.forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if (secTop < triggerBottom) {
            sec.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Highlight active nav link
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 60;
    navItems.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navItems.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Simple Contact Form Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = "Thank you for contacting Destiny! We'll get back to you soon.";
    this.reset();
    setTimeout(() => {
        formMessage.textContent = '';
    }, 5000);
});