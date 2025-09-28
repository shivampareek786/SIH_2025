// Simple script for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            // Subtract 100px to account for the sticky navigation bar
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to contact cards on scroll using IntersectionObserver
const observerOptions = {
    // Defines how much of the target must be visible to trigger
    threshold: 0.1, 
    // Margin around the viewport; adjusted to trigger before the element is fully visible
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            // Apply final, visible styles
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Stop observing once it's visible to save performance
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Initialize styles and observe contact cards
document.querySelectorAll('.contact-card').forEach(card => {
    // Initial hidden state for animation
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    // Set transition for the reveal effect
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    // Start observing
    observer.observe(card);
});