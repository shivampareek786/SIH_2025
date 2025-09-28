document.addEventListener('DOMContentLoaded', () => {

    // --- GLOBAL MODAL (POPUP) SETUP ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContentBody = document.getElementById('modal-content-body');
    const closeModalBtn = document.getElementById('modal-close');

    function openModal() {
        if (modalOverlay) modalOverlay.classList.add('active');
    }

    function closeModal() {
        if (modalOverlay) modalOverlay.classList.remove('active');
    }

    if (modalOverlay && closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }

    // --- HOMEPAGE SPECIFIC POPUPS ---
    // Logic for Product Cards (on index.html)
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const artist = card.getAttribute('data-artist');
            const image = card.querySelector('.product-image').style.backgroundImage;
            modalContentBody.innerHTML = `
                <div style="text-align:center;">
                    <div style="width:100%; height:300px; background-image:${image}; background-size:cover; border-radius:8px;"></div>
                    <h2 style="margin-top:20px;">${title}</h2><p style="color:#555;">by ${artist}</p>
                </div>`;
            openModal();
        });
    });

    // Logic for Guide Cards (on index.html)
// In main.js, find the "Logic for Guide Cards" section and replace it.

document.querySelectorAll('.guide-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        const specialty = card.getAttribute('data-specialty');
        const image = card.querySelector('img').src;
        
        // This HTML now includes a clickable link with an ID on the badge
        modalContentBody.innerHTML = `
            <div style="text-align:center;">
                <img src="${image}" alt="${name}" style="width:120px; height:120px; border-radius:50%; object-fit:cover;">
                <h2 style="margin-top:20px;">${name}</h2>
                <p style="color:#E67E22; font-weight:bold;">${specialty}</p>

                <a href="#" id="show-cert-btn" class="verified-badge" style="text-decoration:none; display:inline-block; margin-top:10px;">
                    <i class="fa-solid fa-check"></i> Blockchain Verified
                </a>

                <p style="margin:20px 0;">Our guides are local experts, verified for your safety and to provide the most authentic experience.</p>
            </div>`;
        openModal();
    });
});

    // Logic for Chatbot Icon (on index.html)
    // Logic for Chatbot Icon (on index.html)
const chatbotIcon = document.querySelector('.chatbot-icon');
if (chatbotIcon) {
    chatbotIcon.addEventListener('click', () => {
        modalContentBody.innerHTML = `
            <div style="text-align:center;">
                <h2>AI Assistant</h2>
                <p style="margin-bottom:20px;">Our multilingual chatbot is here to help you plan your trip.</p>
                <div style="border:1px solid #ddd; padding:15px; border-radius:8px; text-align:left;">
                    <p><strong>Bot:</strong> Namaste! How can I help you today?</p>
                </div>
                <input type="text" placeholder="Type your message..." style="width:100%; padding:10px; margin-top:15px; border-radius:8px; border:1px solid #ccc; font-family: 'Poppins', sans-serif;">
            </div>
        `;
        openModal();
    });
}

    // --- EVENT LISTENER FOR PAGE-SPECIFIC BUTTONS ---
    // This single listener handles clicks for buttons on different pages.
    document.addEventListener('click', function(event) {
        
        // Logic for the "Manage Transport" button (on confirmation.html)
        if (event.target && event.target.id === 'manage-transport-btn') {
            event.preventDefault();
            modalContentBody.innerHTML = `
                <div style="text-align:left;">
                    <h3 style="text-align:center; margin-bottom:20px;">Manage Your Trip Add-ons</h3>
                    <div class="day-plan"><span>Day 1: Betla National Park</span><button class="btn-secondary btn-book-transport">Book Transport</button></div>
                    <div class="day-plan"><span>Day 2: Travel to Netarhat</span><button class="btn-secondary btn-book-transport">Book Transport</button></div>
                    <div class="day-plan"><span>Day 3: Visit Magnolia Point</span><button class="btn-secondary btn-book-transport">Book Transport</button></div>
                </div>`;
            openModal();
        }

        // Logic for the smaller "Book Transport" buttons inside the popup
        if (event.target && event.target.classList.contains('btn-book-transport')) {
            modalContentBody.innerHTML = `
                <div style="text-align:center;">
                    <h3>Book a Ride</h3>
                    <img src="https://i.imgur.com/gplTfC7.png" alt="Map Route" style="width:100%; border-radius:8px;">
                    <button class="btn-primary" id="confirm-transport-btn" style="width:100%; padding:15px; margin-top:20px;">Confirm & Book Ride</button>
                </div>`;
            document.getElementById('confirm-transport-btn').addEventListener('click', () => {
                window.location.href = 'tracking.html';
            });
        }

        // Logic for the Feedback Button (on confirmation.html)
        if (event.target && event.target.id === 'feedback-btn') {
            event.preventDefault();
            modalContentBody.innerHTML = `
                <div style="text-align:center;">
                    <h3>Share Your Feedback</h3>
                    <textarea placeholder="Tell us about your experience..." style="width:100%; height:100px; padding:10px; margin:15px 0; border-radius:8px;"></textarea>
                    <button class="btn-primary" id="submit-feedback">Submit</button>
                </div>`;
            openModal();
            document.getElementById('submit-feedback').addEventListener('click', () => {
                alert('Thank you for your feedback!');
                closeModal();
            });
        }
    });
});// Add this inside the document.addEventListener('click', function(event) { ... });


// --- DEDICATED FIX FOR BLOCKCHAIN CERTIFICATE BUTTON ---
// This listener is added to ensure the green banner works correctly.

document.addEventListener('click', function(event) {
    
    // This looks for a click on the green banner with the id 'show-cert-btn'
    const certButton = event.target.closest('#show-cert-btn');
    
    if (certButton) {
        // Step 1: Prevent the '#' from being added to the URL
        event.preventDefault();
        
        // Step 2: Find the modal body on the page
        const modalContentBody = document.getElementById('modal-content-body');
        
        // Step 3: Change the content of the popup to show the certificate
        if (modalContentBody) {
            modalContentBody.innerHTML = `
                <div style="text-align:center;">
                    <h3 style="margin-bottom:15px;">Digital Certificate of Authenticity</h3>
                    
                    <img src="blockchain.png" alt="Blockchain Certificate" style="width:100%; border-radius:8px;">

                </div>
            `;
        }
    }
});