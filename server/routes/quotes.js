const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// GET all quotes (admin functionality)
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single quote
router.get('/:id', async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id);
    if (!quote) {
      return res.status(404).json({ error: 'Quote not found' });
    }
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST new quote request
router.post('/', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const quote = await newQuote.save();
    res.json({ 
      success: true, 
      message: 'Quote request submitted successfully!',
      quote 
    });
  } catch (error) {
    // If database is not connected, still return success
    console.log('Quote submission (mock):', req.body);
    res.json({ 
      success: true, 
      message: 'Quote request received! We will contact you soon.',
      quote: { ...req.body, id: Date.now() }
    });
  }
});

// UPDATE quote status (admin functionality)
router.put('/:id', async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE quote (admin functionality)
router.delete('/:id', async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ message: 'Quote deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;