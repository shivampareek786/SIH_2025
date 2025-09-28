// --- Uncomment and configure this section for Firebase when you are ready ---
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot, collection } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Global variables for the canvas environment
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
const authToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

let db, auth, userId;
let isAuthReady = false;

// Initialize Firebase only if the config is available
if (Object.keys(firebaseConfig).length > 0) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            userId = user.uid;
            isAuthReady = true;
            console.log("Authentication state changed:", user.uid);
            // You can call a function to fetch saved products here
            // fetchSavedProducts(); 
        } else {
            // Sign in anonymously if no user is found
            try {
                if (authToken) {
                    await signInWithCustomToken(auth, authToken);
                } else {
                    await signInAnonymously(auth);
                }
            } catch (error) {
                console.error("Authentication failed:", error);
            }
        }
    });
} else {
    console.log("Firebase not configured. Running in offline mode.");
}
*/
// --- End of Firebase section ---


// Anamorphic Glass & Nature's Embrace color palette (This can be removed if Tailwind is configured in tailwind.config.js)
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'nature-green': '#2C5A48',
                'accent-orange': '#E68337',
                'off-white': '#FBFBFB',
                'soft-peach': '#F9D3B4',
                'earthy-brown': '#8B5E3C',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
};

// --- Data and Variables for Products ---
const allProducts = [
    { id: 'prod_01', name: 'Hand-Painted Ceramic Vase', artisan: 'Santhal', price: '75.00', image: 'All img resource/Handcrafted-miniature-bud.jpg' },
    { id: 'prod_02', name: 'Artisan Woven Basket', artisan: 'Munda', price: '50.00', image: 'All img resource/Artisan Woven Basket.jpg' },
    { id: 'prod_03', name: 'Hand-Stitched Leather Wallet', artisan: 'Oraon', price: '95.00', image: 'All img resource/Hand-Stitched Leather Wallet.jpeg' },
    { id: 'prod_04', name: 'Handmade Silver Earrings', artisan: 'Ho', price: '65.00', image: 'All img resource/Handmade Silver Earrings.jpg' },
    { id: 'prod_05', name: 'Intricate Wood Carving', artisan: 'Sanyam', price: '1200.00', image: 'All img resource/Intricate Wood Carving.jpg' },
    { id: 'prod_06', name: 'Organic Handmade Soaps', artisan: 'Shaan', price: '15.00', image: 'All img resource/Organic Handmade Soaps.jpg' },
    { id: 'prod_07', name: 'Hand-Blown Glass Sculpture', artisan: 'Makoto adivasi', price: '150.00', image: 'All img resource/Hand-Blown Glass Sculpture.jpg' },
    { id: 'prod_08', name: 'Ceramic Coffee Mug', artisan: 'Jane Doi', price: '25.00', image: 'All img resource/Ceramic Coffee Mug.jpg' },
    { id: 'prod_09', name: 'Hand-Woven Scarf', artisan: 'Saif Mansoori', price: '60.00', image: 'All img resource/Hand-Woven Scarf.jpg' },
    { id: 'prod_10', name: 'Leather-bound Journal', artisan: 'Bensari', price: '85.00', image: 'All img resource/Leather-bound Journal.jpg' },
    { id: 'prod_11', name: 'Polished Stone Coasters (Set of 4)', artisan: 'Taki', price: '35.00', image: 'All img resource/Polished Stone Coasters (Set of 4).jpg' },
    { id: 'prod_12', name: 'Bamboo hand fan', artisan: 'Sana', price: '45.00', image: 'All img resource/Bamboo hand fan.jpg' },
];

let productsLoaded = 0;
const productsPerPage = 8; // Changed this to 8 for a better initial display
let savedProductIds = [];

// DOM elements
let productGrid, loadMoreBtn, dropdownBtn, dropdownMenu;

// Function to render product cards
function renderProducts() {
    const productsToRender = allProducts.slice(productsLoaded, productsLoaded + productsPerPage);
    
    productsToRender.forEach(product => {
        const isSaved = savedProductIds.includes(product.id);
        const heartClass = isSaved ? 'text-accent-orange' : 'text-earthy-brown hover:text-accent-orange';

        const productCard = document.createElement('div');
        productCard.classList.add('product-card', 'glass-panel', 'p-4', 'flex', 'flex-col', 'items-center', 'text-center', 'transition-all', 'hover:shadow-2xl', 'hover:scale-[1.02]');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-auto rounded-xl object-cover mb-4">
            <div class="w-full">
                <h3 class="font-bold text-lg text-nature-green">${product.name}</h3>
                <p class="text-sm text-earthy-brown opacity-80 mt-1">${product.artisan}</p>
                <div class="flex items-center justify-between mt-4">
                    <span class="font-bold text-lg text-accent-orange">${product.price}</span>
                    <div class="flex space-x-2">
                        <button class="heart-btn text-2xl transition transform hover:scale-125 active:scale-90 focus:outline-none ${heartClass}" data-product-id="${product.id}">♡</button>
                        <button class="add-to-cart-btn bg-accent-orange text-off-white px-4 py-1.5 rounded-full text-sm font-semibold transition hover:bg-accent-orange/90 active:scale-95 relative overflow-hidden">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    productsLoaded += productsToRender.length;
    if (productsLoaded >= allProducts.length) {
        loadMoreBtn.classList.add('hidden');
    } else {
        loadMoreBtn.classList.remove('hidden');
    }
}

function loadMoreProducts() {
    renderProducts();
}

// --- Event Listeners for Page Load and User Interaction ---
document.addEventListener('DOMContentLoaded', () => {
    // Get all the DOM elements inside this listener to ensure they exist
    productGrid = document.getElementById('product-grid');
    loadMoreBtn = document.getElementById('load-more-btn');
    dropdownBtn = document.getElementById('dropdown-btn');
    dropdownMenu = document.getElementById('dropdown-menu');

    // Initial product render on page load
    renderProducts();

    // Event listener for "Load More" button
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    // Event listener for dropdown toggle
    if (dropdownBtn && dropdownMenu) {
        dropdownBtn.addEventListener('click', () => {
            dropdownMenu.classList.toggle('hidden');
        });
    }

    // Add event listeners to dynamically created elements
    document.addEventListener('click', (e) => {
        if (e.target.closest('.heart-btn')) {
            const productId = e.target.closest('.heart-btn').getAttribute('data-product-id');
            console.log(`Heart button clicked for product: ${productId}`);
        }
        if (e.target.closest('.add-to-cart-btn')) {
            const button = e.target.closest('.add-to-cart-btn');
            const swirl = document.createElement('div');
            swirl.classList.add('absolute', 'inset-0', 'bg-accent-orange', 'rounded-full', 'animate-pulse-swirl');
            button.appendChild(swirl);
            setTimeout(() => swirl.remove(), 500);
        }
    });
});