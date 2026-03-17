const mongoose = require('mongoose');
const metricsModel = require('../models/metrics');
const getCurrentMetrics = async () => {
    const metrics = await metricsModel.find().sort({ createdAt: -1 }).limit(1);
    return metrics[0];
};
module.exports = { getCurrentMetrics };