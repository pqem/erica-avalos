document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('toggle'); // Optional animation class
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu when a link is clicked
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Fade in text on scroll (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply fade-in animation to sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
