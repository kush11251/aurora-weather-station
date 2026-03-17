const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');
router.get('/current', (req, res) => {
    metricsService.getCurrentMetrics().then((metrics) => {
        res.json(metrics);
    }).catch((err) => {
        res.status(500).json({ error: 'Failed to retrieve metrics' });
    });
});
module.exports = router;