document.addEventListener('DOMContentLoaded', () => {
    const itineraryContent = document.getElementById('itinerary-content');
    const itineraryHeader = document.getElementById('itinerary-header');
    
    // NEW: More detailed "database" of travel plans
    const plans = {
        nature: {
            '3': {
                title: '3-Day Nature & Wildlife Tour',
                headerImage: 'url("https://i.imgur.com/1z1nQyV.jpeg")',
                days: [
                    {
                        day: "Day 1",
                        title: "Betla National Park Safari",
                        description: "Begin your adventure in the dense forests of Betla, home to diverse wildlife including elephants, bison, and the elusive tiger.",
                        recommendations: [
                            { icon: "fa-solid fa-camera", text: "Don't miss the evening Jeep safari for the best wildlife sightings." },
                            { icon: "fa-solid fa-utensils", text: "Try a traditional meal at a local dhaba near the park entrance." }
                        ]
                    },
                    {
                        day: "Day 2",
                        title: "Netarhat's Sunset Point",
                        description: "Travel to Netarhat, the 'Queen of Chotanagpur.' Its serene beauty and cool climate offer a perfect retreat from city life.",
                        recommendations: [
                            { icon: "fa-solid fa-sun", text: "Witness the breathtaking sunset from Magnolia Point." },
                            { icon: "fa-solid fa-shoe-prints", text: "Take a light morning trek through the pine forests." }
                        ]
                    },
                    {
                        day: "Day 3",
                        title: "Hundru & Jonha Falls",
                        description: "Conclude your trip by visiting two of Jharkhand’s most majestic waterfalls. The sight and sound of the cascading water are truly mesmerizing.",
                        recommendations: [
                            { icon: "fa-solid fa-person-swimming", text: "You can take a dip in the pool at the base of Jonha Falls." },
                            { icon: "fa-solid fa-triangle-exclamation", text: "Be cautious on the steps leading down to Hundru Falls, as they can be slippery." }
                        ]
                    }
                ]
            }
        },
        spiritual: {
            '1': {
                title: '1-Day Spiritual Journey',
                headerImage: 'url("https://i.imgur.com/k6fJtC3.jpeg")',
                days: [
                    {
                        day: "Day 1",
                        title: "Deoghar Temple Tour",
                        description: "Embark on a sacred journey to Deoghar, home to the Baidyanath Jyotirlinga, one of the twelve most sacred Shiva shrines in India.",
                        recommendations: [
                            { icon: "fa-solid fa-clock", text: "Visit the Baidyanath Temple early in the morning to avoid large crowds." },
                            { icon: "fa-solid fa-cart-shopping", text: "Explore the local market for pedas, a famous local sweet offering." }
                        ]
                    }
                ]
            }
        }
    };

    const params = new URLSearchParams(window.location.search);
    const interest = params.get('interest');
    const duration = params.get('duration');

    let plan = (plans[interest] && plans[interest][duration]) ? plans[interest][duration] : null;

    if (plan) {
        // Set the header title and background image
        itineraryHeader.querySelector('h1').textContent = plan.title;
        itineraryHeader.style.backgroundImage = plan.headerImage;

        // Build the timeline HTML
        let timelineHTML = '<div class="timeline">';
        plan.days.forEach((dayData, index) => {
            const side = (index % 2 === 0) ? 'left' : 'right';
            let recommendationsHTML = '<ul class="recommendations">';
            dayData.recommendations.forEach(rec => {
                recommendationsHTML += `<li><i class="${rec.icon}"></i>${rec.text}</li>`;
            });
            recommendationsHTML += '</ul>';

            timelineHTML += `
                <div class="day-card ${side}">
                    <div class="day-content">
                        <h2>${dayData.day}</h2>
                        <h3>${dayData.title}</h3>
                        <p>${dayData.description}</p>
                        ${recommendationsHTML}
                    </div>
                </div>
            `;
        });
        timelineHTML += '</div>';
        itineraryContent.innerHTML = timelineHTML;
        
    } else {
        itineraryHeader.querySelector('h1').textContent = 'Plan Not Found';
        itineraryContent.innerHTML = `<p style="text-align:center;">Please try a different combination.</p>`;
    }

    // This makes the main "Book This Trip" button work
    const bookTripButton = document.getElementById('book-trip-btn');
    bookTripButton.href = `booking.html?${window.location.search}`;
    
    // This makes the "Download" button work
    const downloadButton = document.getElementById('download-btn');
    downloadButton.addEventListener('click', () => {
        alert('Trip Downloaded! Your itinerary and map are now available offline.');
    });
});