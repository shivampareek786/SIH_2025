const express = require('express');
const router = express.Router();
const Guide = require('../models/guide');

// --- Fake Data for the Prototype ---
const guidesData = [
    { name: "Aarav Kumar", specialty: "Wildlife & Nature Specialist", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", isBlockchainVerified: true },
    { name: "Priya Singh", specialty: "Cultural Heritage Expert", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop", isBlockchainVerified: true },
    { name: "Rohan Das", specialty: "Adventure & Trekking Guide", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop", isBlockchainVerified: true }
];

// Seed the database with this data if it's empty
Guide.countDocuments().then(count => {
    if (count === 0) {
        Guide.insertMany(guidesData).then(() => console.log("Dummy guides inserted!"));
    }
});

// --- API ROUTES ---

// GET all guides
router.get('/guides', async (req, res) => {
    try {
        const guides = await Guide.find();
        res.json(guides);
    } catch (err) {
        res.status(500).json({ message: "Error fetching guides" });
    }
});

// AI Itinerary Planner (Fake AI)
router.post('/generate-itinerary', (req, res) => {
    const { interest, duration } = req.body;
    let itinerary = {};
    if (interest === 'nature' && duration === '3') {
        itinerary = { title: "3-Day Nature Lover's Trip", plan: [{ day: 1, activity: "Explore Betla National Park." }, { day: 2, activity: "Visit Hundru and Jonha Falls." }, { day: 3, activity: "Relax at the beautiful Patratu Valley." }] };
    } else {
        itinerary = { title: "Spiritual Journey Plan", plan: [{ day: 1, activity: "Visit Deoghar Temple." }] };
    }
    res.json(itinerary);
});

module.exports = router;