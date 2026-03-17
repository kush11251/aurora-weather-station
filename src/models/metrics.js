const mongoose = require('mongoose');
const metricsSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    pressure: Number,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Metrics', metricsSchema);