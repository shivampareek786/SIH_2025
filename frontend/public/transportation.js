// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    document.getElementById('navLinks').classList.toggle('active');
});

// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.fa-chevron-down');
        
        // Toggle active class on content
        content.classList.toggle('active');
        
        // Rotate chevron icon
        icon.classList.toggle('fa-rotate-180');
        
        // Close other accordion items
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.nextElementSibling.classList.remove('active');
                otherHeader.querySelector('.fa-chevron-down').classList.remove('fa-rotate-180');
            }
        });
    });
});

// Map Initialization (Simplified for prototype)
function initMap() {
    // In a real implementation, this would initialize Google Maps
    const mapElement = document.getElementById('map');
    mapElement.innerHTML = `
        <div style="width:100%; height:100%; background: #e9ecef; display:flex; align-items:center; justify-content:center; color:#666;">
            <div style="text-align:center;">
                <i class="fas fa-map" style="font-size:48px; margin-bottom:15px;"></i>
                <p>Interactive Map of Jharkhand</p>
                <p style="font-size:14px; margin-top:10px;">(In full implementation, this would show Google Maps with transport hubs)</p>
            </div>
        </div>
    `;
}

// Initialize map when page loads
window.onload = initMap;

// Detect Location Button
document.getElementById('detectLocation').addEventListener('click', function() {
    alert('Location detection would be enabled in the full implementation. For now, showing Ranchi as default location.');
    // In real implementation, this would use browser geolocation API
});

// Get Directions Button
document.getElementById('getDirections').addEventListener('click', function() {
    alert('This would open Google Maps with directions in the full implementation.');
});

// Chat Bot Button
document.getElementById('chatBtn').addEventListener('click', function() {
    alert('Chat assistant would open in the full implementation.');
});

// Card action buttons
const cardButtons = document.querySelectorAll('.card-btn');
cardButtons.forEach(button => {
    button.addEventListener('click', function() {
        const action = this.textContent.trim();
        alert(`"${action}" functionality would be implemented in the full version.`);
    });
});