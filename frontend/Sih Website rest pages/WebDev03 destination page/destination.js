// Sample data for tourist destinations (Jharkhand Theme)
const destinations = [
    {
        "id": 1,
        "name": "Hundru Falls, Ranchi",
        "category": "nature",
        "location": "ranchi",
        "difficulty": "easy",
        "description": "One of the highest waterfalls in Jharkhand, formed by the Subarnarekha River with a drop of 98 meters.",
        "image": "destination page img resources/HundruFall.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=igazu-falls-argentina-brazil"
    },
    {
        "id": 2,
        "name": "Baidyanath Temple, Deoghar",
        "category": "spiritual",
        "location": "other",
        "difficulty": "easy",
        "description": "One of the twelve Jyotirlingas in India and an important Hindu pilgrimage site.",
        "image": "destination page img resources/baidyanath.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=taj-mahal-agra-india"
    },
    {
        "id": 3,
        "name": "Dalma Wildlife Sanctuary, Jamshedpur",
        "category": "adventure",
        "location": "jamshedpur",
        "difficulty": "moderate",
        "description": "Home to elephants, leopards, and various bird species, offering trekking opportunities.",
        "image": "destination page img resources/DalmaWildLife.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=swiss-alps"
    },
    {
        "id": 4,
        "name": "Netarhat Hill Station",
        "category": "nature",
        "location": "other",
        "difficulty": "moderate",
        "description": "Known as the 'Queen of Chotanagpur', famous for sunrise and sunset views.",
        "image": "destination page img resources/nehrat hills.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=swiss-alps"
    },
    {
        "id": 5,
        "name": "Jubilee Park, Jamshedpur",
        "category": "culture",
        "location": "jamshedpur",
        "difficulty": "easy",
        "description": "Spread over 225 acres with beautiful gardens, fountains, and recreational facilities.",
        "image": "destination page img resources/jubilee-park.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=grand-canyon-usa"
    },
    {
        "id": 6,
        "name": "Sun Temple, Ranchi",
        "category": "spiritual",
        "location": "ranchi",
        "difficulty": "easy",
        "description": "Unique temple shaped like a giant chariot with 18 wheels and seven horses.",
        "image": "destination page img resources/Sun-Temple-Jharkhand.webp",
        "vrUrl": "https://www.airpano.com/embed.php?3D=kyoto-japan"
    },
    {
        "id": 7,
        "name": "Betla National Park",
        "category": "adventure",
        "location": "other",
        "difficulty": "challenging",
        "description": "One of the first national parks in India, home to tigers, elephants, and bisons.",
        "image": "destination page img resources/Betla-National-Park.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=serengeti-tanzania"
    },
    {
        "id": 8,
        "name": "Patratu Valley",
        "category": "nature",
        "location": "other",
        "difficulty": "easy",
        "description": "Scenic valley with winding roads and a beautiful reservoir surrounded by hills.",
        "image": "destination page img resources/patratu Velley.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=bora-bora"
    },
    {
        "id": 9,
        "name": "Palamau Fort",
        "category": "historical",
        "location": "other",
        "difficulty": "moderate",
        "description": "16th-century fort built by Chero kings, now in ruins but historically significant.",
        "image": "destination page img resources/palamu fort.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=amazon-rainforest"
    },
    {
        "id": 10,
        "name": "Jagannath Temple, Ranchi",
        "category": "spiritual",
        "location": "ranchi",
        "difficulty": "easy",
        "description": "Ancient temple resembling Puri's Jagannath Temple, built in 1691.",
        "image": "destination page img resources/jagannath temple.webp",
        "vrUrl": "https://www.airpano.com/embed.php?3D=varanasi-india"
    },
    {
        "id": 11,
        "name": "Dassam Falls, Ranchi",
        "category": "nature",
        "location": "ranchi",
        "difficulty": "moderate",
        "description": "Also known as Dassam Gagh, a magnificent waterfall on Kanchi River.",
        "image": "destination page img resources/dassam-falls.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=iceland"
    },
    {
        "id": 12,
        "name": "Deori Temple, Ranchi",
        "category": "spiritual",
        "location": "ranchi",
        "difficulty": "easy",
        "description": "Ancient temple dedicated to Goddess Durga, located on a hilltop.",
        "image": "destination page img resources/deori-temple-ranchi-jharkhand-deori-attr-hero.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=varanasi-india"
    },
    {
        "id": 13,
        "name": "Hazaribagh Lake",
        "category": "nature",
        "location": "other",
        "difficulty": "easy",
        "description": "Picturesque artificial lake surrounded by hills and forests.",
        "image": "destination page img resources/Hazaribagh-Lake.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=bora-bora"
    },
    {
        "id": 14,
        "name": "Parasnath Hill",
        "category": "spiritual",
        "location": "other",
        "difficulty": "challenging",
        "description": "Highest mountain in Jharkhand and important Jain pilgrimage site with numerous temples.",
        "image": "destination page img resources/parasnath hill.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=swiss-alps"
    },
    {
        "id": 15,
        "name": "Shikharji",
        "category": "spiritual",
        "location": "other",
        "difficulty": "challenging",
        "description": "One of the most important Jain pilgrimage sites where 20 Tirthankaras attained salvation.",
        "image": "destination page img resources/shikherjee jain mandir.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=varanasi-india"
    },
    {
        "id": 16,
        "name": "Jonha Falls, Ranchi",
        "category": "nature",
        "location": "ranchi",
        "difficulty": "moderate",
        "description": "Also known as Gautamdhara, a beautiful waterfall surrounded by lush greenery.",
        "image": "destination page img resources/jonha falls.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=igazu-falls-argentina-brazil"
    },
    {
        "id": 17,
        "name": "Rock Garden, Ranchi",
        "category": "culture",
        "location": "ranchi",
        "difficulty": "easy",
        "description": "Man-made garden with sculptures and artworks made from waste materials.",
        "image": "destination page img resources/rock-garden-ranchi.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=grand-canyon-usa"
    },
    {
        "id": 18,
        "name": "Tagore Hill, Ranchi",
        "category": "historical",
        "location": "ranchi",
        "difficulty": "easy",
        "description": "Hill named after Rabindranath Tagore who used to visit this place frequently.",
        "image": "destination page img resources/tagore hills.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=kyoto-japan"
    },
    {
        "id": 19,
        "name": "Maithon Dam",
        "category": "nature",
        "location": "Dhanbad",
        "difficulty": "easy",
        "description": "Large dam on Barakar River with an underground power station and beautiful reservoir.",
        "image": "destination page img resources/maithon dam.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=bora-bora"
    },
    {
        "id": 20,
        "name": "Topchanchi Lake",
        "category": "nature",
        "location": "Dhanbad",
        "difficulty": "easy",
        "description": "Scenic reservoir surrounded by hills, ideal for picnics and bird watching.",
        "image": "destination page img resources/topchanchi lake.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=bora-bora"
    },
    {
        "id": 21,
        "name": "Sita Falls",
        "category": "nature",
        "location": "other",
        "difficulty": "moderate",
        "description": "Beautiful waterfall located near the Hundru Falls, less crowded and serene.",
        "image": "destination page img resources/Sita-Falls-Jharkhand.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=igazu-falls-argentina-brazil"
    },
    {
        "id": 22,
        "name": "Baba Baidyanath Temple Complex",
        "category": "spiritual",
        "location": "other",
        "difficulty": "easy",
        "description": "Group of 21 temples including the main Jyotirlinga temple and other shrines.",
        "image": "destination page img resources/baba baidyanath temple.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=varanasi-india"
    },
    {
        "id": 23,
        "name": "Nandan Pahar, Deoghar",
        "category": "culture",
        "location": "other",
        "difficulty": "easy",
        "description": "Amusement park and recreational area with temples and entertainment facilities.",
        "image": "destination page img resources/nandan pahar.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=grand-canyon-usa"
    },
    {
        "id": 24,
        "name": "Trikut Pahar",
        "category": "adventure",
        "location": "other",
        "difficulty": "challenging",
        "description": "Mountain with three peaks offering trekking opportunities and cable car ride.",
        "image": "destination page img resources/trikut pahar.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=swiss-alps"
    },
    {
        "id": 25,
        "name": "Lodh Falls",
        "category": "nature",
        "location": "other",
        "difficulty": "challenging",
        "description": "Highest waterfall in Jharkhand with a height of 143 meters, located in deep forests.",
        "image": "destination page img resources/Lodh-Waterfalls-6.jpg",
        "vrUrl": "https://www.airpano.com/embed.php?3D=igazu-falls-argentina-brazil"
    }
];

// DOM Elements
const placesGrid = document.getElementById('placesGrid');
const categoryTabs = document.querySelectorAll('.category-tab');
const locationFilter = document.getElementById('locationFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const searchBar = document.querySelector('.search-bar');
const loadMoreBtn = document.getElementById('loadMore');
const resultsCountSpan = document.getElementById('resultsCount');
const vrModal = document.getElementById('vrModal');
const closeModal = document.getElementById('closeModal');
const vrIframe = document.getElementById('vrIframe');

// State variables
let currentCategory = 'all';
let currentLocation = 'all';
let currentDifficulty = 'all';
let currentSearch = '';
let displayedCount = 6;
const itemsPerLoad = 6;

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Helper function to get a readable location name
function getLocationName(locationKey) {
    const names = {
        'all': 'All Districts',
        'ranchi': 'Ranchi',
        'jamshedpur': 'Jamshedpur',
        'dhanbad': 'Dhanbad',
        'hazaribagh': 'Hazaribagh',
        'other': 'Other Districts' // Added to handle the new sample data
    };
    return names[locationKey] || capitalizeFirstLetter(locationKey);
}

// Initialize the page
function init() {
    renderPlaces();
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Category tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            displayedCount = itemsPerLoad;
            renderPlaces();
        });
    });

    // Filters
    locationFilter.addEventListener('change', () => {
        currentLocation = locationFilter.value;
        displayedCount = itemsPerLoad;
        renderPlaces();
    });

    difficultyFilter.addEventListener('change', () => {
        currentDifficulty = difficultyFilter.value;
        displayedCount = itemsPerLoad;
        renderPlaces();
    });

    // Search
    searchBar.addEventListener('input', () => {
        currentSearch = searchBar.value.toLowerCase();
        displayedCount = itemsPerLoad;
        renderPlaces();
    });

    // Load more
    loadMoreBtn.addEventListener('click', () => {
        displayedCount += itemsPerLoad;
        renderPlaces();
    });

    

    // VR Modal (using event delegation)
    placesGrid.addEventListener('click', (e) => {
        const vrBadge = e.target.closest('.vr-badge');
        if (vrBadge) {
            const vrUrl = vrBadge.dataset.vrUrl;
            if (vrUrl) {
                vrIframe.src = vrUrl;
                vrModal.style.display = 'flex';
            }
        }
    });

    closeModal.addEventListener('click', () => {
        vrModal.style.display = 'none';
        vrIframe.src = ''; // Stop the VR content
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === vrModal) {
            vrModal.style.display = 'none';
            vrIframe.src = '';
        }
    });
}

// Filter destinations based on current filters
function filterDestinations() {
    return destinations.filter(destination => {
        const matchesCategory = currentCategory === 'all' || destination.category === currentCategory;
        const matchesLocation = currentLocation === 'all' || destination.location === currentLocation;
        const matchesDifficulty = currentDifficulty === 'all' || destination.difficulty === currentDifficulty;
        const matchesSearch = currentSearch === '' || 
            destination.name.toLowerCase().includes(currentSearch) ||
            destination.description.toLowerCase().includes(currentSearch);

        return matchesCategory && matchesLocation && matchesDifficulty && matchesSearch;
    });
}

// Render places to the grid
function renderPlaces() {
    const filteredDestinations = filterDestinations();
    const totalFiltered = filteredDestinations.length;
    const destinationsToShow = filteredDestinations.slice(0, displayedCount);
    
    // Update results count
    resultsCountSpan.textContent = `${Math.min(displayedCount, totalFiltered)} of ${totalFiltered}`;
    
    // Manage Load More button visibility
    if (displayedCount >= totalFiltered) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }

    // Clear the grid
    placesGrid.innerHTML = '';
    
    // Handle no results found
    if (destinationsToShow.length === 0) {
         placesGrid.innerHTML = '<p style="text-align:center; color: var(--light); grid-column: 1 / -1; font-size: 1.2rem; padding: 20px;">No destinations found matching your criteria. Try adjusting your filters!</p>';
         return;
    }

    // Add places to the grid
    destinationsToShow.forEach((destination, index) => {
        const placeCard = document.createElement('div');
        placeCard.className = 'place-card glass-card';
        placeCard.style.animationDelay = `${index * 0.1}s`;
        
        placeCard.innerHTML = `
            <div class="card-image">
                <img src="${destination.image}" alt="${destination.name}">
                <div class="vr-badge" data-vr-url="${destination.vrUrl}">
                    <i class="fas fa-vr-cardboard"></i>
                </div>
            </div>
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="card-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${getLocationName(destination.location)}</span>
                    <span><i class="fas fa-signal"></i> ${capitalizeFirstLetter(destination.difficulty)}</span>
                </div>
            </div>
        `;

        placesGrid.appendChild(placeCard);
    });
}

// Start the application
init();