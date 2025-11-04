const mongoose = require('mongoose');

const TileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['ceramic', 'porcelain', 'marble', 'granite', 'mosaic', 'wood-look', 'stone-look', 'modern']
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  finish: {
    type: String,
    enum: ['glossy', 'matte', 'textured', 'polished'],
    default: 'matte'
  },
  price: {
    type: Number,
    required: true,
  },
  priceUnit: {
    type: String,
    default: 'per sq ft'
  },
  textureUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Tile', TileSchema);