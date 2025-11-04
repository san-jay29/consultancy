const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  tiles: [{
    tileId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tile'
    },
    tileName: String,
    quantity: Number,
    unit: String
  }],
  roomType: {
    type: String,
    enum: ['living-room', 'kitchen', 'bathroom', 'other'],
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'quoted', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);