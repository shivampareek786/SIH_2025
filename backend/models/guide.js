const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    imageUrl: { type: String, required: true },
    rating: { type: Number, default: 4.5 },
    isBlockchainVerified: { type: Boolean, default: true }
});

module.exports = mongoose.model('Guide', guideSchema);