const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

router.post('/create', async (req, res) => {
    const { userId, title, url } = req.body;
    try {
        const link = new Link({ userId, title, url });
        await link.save();
        res.status(201).json(link);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:userId', async (req, res) => {
    try {
        const links = await Link.find({ userId: req.params.userId });
        res.json(links);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
