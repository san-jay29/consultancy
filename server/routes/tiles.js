const express = require('express');
const router = express.Router();
const Tile = require('../models/Tile');

const mockTiles = [
  {
    _id: '1',
    name: 'Classic White Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic1/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic1/400/400',
    price: 25.99,
    dimensions: '12x12 inches',
    description: 'Clean white ceramic tile'
  },
  {
    _id: '2',
    name: 'Subway Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic2/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic2/400/400',
    price: 19.99,
    dimensions: '3x6 inches',
    description: 'Classic subway tile design'
  },
  {
    _id: '3',
    name: 'Beige Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic3/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic3/400/400',
    price: 22.99,
    dimensions: '12x12 inches',
    description: 'Warm beige ceramic tile'
  },
  {
    _id: '4',
    name: 'Gray Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic4/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic4/400/400',
    price: 24.99,
    dimensions: '8x8 inches',
    description: 'Modern gray ceramic'
  },
  {
    _id: '5',
    name: 'Blue Mosaic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic5/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic5/400/400',
    price: 35.99,
    dimensions: '12x12 inches',
    description: 'Blue ceramic mosaic'
  },
  {
    _id: '6',
    name: 'White Marble Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain1/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain1/400/400',
    price: 45.99,
    dimensions: '24x24 inches',
    description: 'Marble look porcelain'
  },
  {
    _id: '7',
    name: 'Wood Look Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain2/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain2/400/400',
    price: 42.99,
    dimensions: '6x36 inches',
    description: 'Wood grain porcelain'
  },
  {
    _id: '8',
    name: 'Black Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain3/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain3/400/400',
    price: 48.99,
    dimensions: '24x24 inches',
    description: 'Black matte porcelain'
  },
  {
    _id: '9',
    name: 'Carrara Marble',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble1/400/400',
    textureUrl: 'https://picsum.photos/seed/marble1/400/400',
    price: 89.99,
    dimensions: '12x12 inches',
    description: 'Premium Carrara marble'
  },
  {
    _id: '10',
    name: 'Calacatta Gold',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble2/400/400',
    textureUrl: 'https://picsum.photos/seed/marble2/400/400',
    price: 125.99,
    dimensions: '18x18 inches',
    description: 'Luxury Calacatta gold'
  },
  {
    _id: '11',
    name: 'Black Galaxy Granite',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite1/400/400',
    textureUrl: 'https://picsum.photos/seed/granite1/400/400',
    price: 65.99,
    dimensions: '12x12 inches',
    description: 'Black granite with gold flecks'
  },
  {
    _id: '12',
    name: 'Kashmir White Granite',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite2/400/400',
    textureUrl: 'https://picsum.photos/seed/granite2/400/400',
    price: 72.99,
    dimensions: '18x18 inches',
    description: 'White granite with gray veining'
  },
  {
    _id: '13',
    name: 'Baltic Brown Granite',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite3/400/400',
    textureUrl: 'https://picsum.photos/seed/granite3/400/400',
    price: 58.99,
    dimensions: '12x12 inches',
    description: 'Brown granite with copper highlights'
  },
  {
    _id: '14',
    name: 'Glass Mosaic Blue',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic1/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic1/400/400',
    price: 38.99,
    dimensions: '12x12 inches',
    description: 'Blue glass mosaic'
  },
  {
    _id: '15',
    name: 'Stone Mosaic Natural',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic2/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic2/400/400',
    price: 42.99,
    dimensions: '12x12 inches',
    description: 'Natural stone mosaic'
  },
  {
    _id: '16',
    name: 'Hexagon Mosaic White',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic3/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic3/400/400',
    price: 35.99,
    dimensions: '11x11 inches',
    description: 'White hexagon mosaic'
  },
  {
    _id: '17',
    name: 'Oak Wood Look',
    category: 'wood-look',
    imageUrl: 'https://picsum.photos/seed/wood1/400/400',
    textureUrl: 'https://picsum.photos/seed/wood1/400/400',
    price: 39.99,
    dimensions: '6x36 inches',
    description: 'Realistic oak wood grain'
  },
  {
    _id: '18',
    name: 'Walnut Wood Look',
    category: 'wood-look',
    imageUrl: 'https://picsum.photos/seed/wood2/400/400',
    textureUrl: 'https://picsum.photos/seed/wood2/400/400',
    price: 44.99,
    dimensions: '8x48 inches',
    description: 'Rich walnut wood appearance'
  },
  {
    _id: '19',
    name: 'Bamboo Look',
    category: 'wood-look',
    imageUrl: 'https://picsum.photos/seed/wood3/400/400',
    textureUrl: 'https://picsum.photos/seed/wood3/400/400',
    price: 36.99,
    dimensions: '6x24 inches',
    description: 'Bamboo appearance'
  },
  {
    _id: '20',
    name: 'Travertine Look',
    category: 'stone-look',
    imageUrl: 'https://picsum.photos/seed/stone1/400/400',
    textureUrl: 'https://picsum.photos/seed/stone1/400/400',
    price: 41.99,
    dimensions: '16x16 inches',
    description: 'Travertine stone appearance'
  },
  {
    _id: '21',
    name: 'Slate Look Gray',
    category: 'stone-look',
    imageUrl: 'https://picsum.photos/seed/stone2/400/400',
    textureUrl: 'https://picsum.photos/seed/stone2/400/400',
    price: 37.99,
    dimensions: '12x12 inches',
    description: 'Gray slate appearance'
  },
  {
    _id: '22',
    name: 'Limestone Look',
    category: 'stone-look',
    imageUrl: 'https://picsum.photos/seed/stone3/400/400',
    textureUrl: 'https://picsum.photos/seed/stone3/400/400',
    price: 43.99,
    dimensions: '18x18 inches',
    description: 'Limestone texture'
  },
  {
    _id: '23',
    name: 'Concrete Look',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern1/400/400',
    textureUrl: 'https://picsum.photos/seed/modern1/400/400',
    price: 32.99,
    dimensions: '24x24 inches',
    description: 'Industrial concrete finish'
  },
  {
    _id: '24',
    name: 'Metal Look Silver',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern2/400/400',
    textureUrl: 'https://picsum.photos/seed/modern2/400/400',
    price: 48.99,
    dimensions: '12x24 inches',
    description: 'Metallic silver finish'
  },
  {
    _id: '25',
    name: 'Large Format Gray',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern3/400/400',
    textureUrl: 'https://picsum.photos/seed/modern3/400/400',
    price: 55.99,
    dimensions: '36x36 inches',
    description: 'Extra large format gray'
  },
  {
    _id: '26',
    name: 'Terra Cotta Red',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic21/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic21/400/400',
    price: 28.99,
    dimensions: '8x8 inches',
    description: 'Traditional terra cotta'
  },
  {
    _id: '27',
    name: 'Sage Green Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic22/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic22/400/400',
    price: 31.99,
    dimensions: '4x8 inches',
    description: 'Sage green ceramic'
  },
  {
    _id: '28',
    name: 'Glossy Black Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic23/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic23/400/400',
    price: 34.99,
    dimensions: '6x6 inches',
    description: 'High-gloss black ceramic'
  },
  {
    _id: '29',
    name: 'Cream Glazed',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic24/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic24/400/400',
    price: 26.99,
    dimensions: '10x10 inches',
    description: 'Cream glazed ceramic'
  },
  {
    _id: '30',
    name: 'Ocean Blue Ceramic',
    category: 'ceramic',
    imageUrl: 'https://picsum.photos/seed/ceramic25/400/400',
    textureUrl: 'https://picsum.photos/seed/ceramic25/400/400',
    price: 33.99,
    dimensions: '3x12 inches',
    description: 'Ocean blue ceramic'
  },
  {
    _id: '31',
    name: 'Marble Veined Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain21/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain21/400/400',
    price: 52.99,
    dimensions: '24x48 inches',
    description: 'Marble-look porcelain'
  },
  {
    _id: '32',
    name: 'Concrete Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain22/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain22/400/400',
    price: 46.99,
    dimensions: '12x24 inches',
    description: 'Concrete porcelain'
  },
  {
    _id: '33',
    name: 'Wood Grain Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain23/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain23/400/400',
    price: 47.99,
    dimensions: '9x48 inches',
    description: 'Wood grain porcelain'
  },
  {
    _id: '34',
    name: 'Stone Effect Porcelain',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain24/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain24/400/400',
    price: 49.99,
    dimensions: '20x20 inches',
    description: 'Stone effect porcelain'
  },
  {
    _id: '35',
    name: 'Polished Porcelain White',
    category: 'porcelain',
    imageUrl: 'https://picsum.photos/seed/porcelain25/400/400',
    textureUrl: 'https://picsum.photos/seed/porcelain25/400/400',
    price: 44.99,
    dimensions: '24x24 inches',
    description: 'High-gloss white porcelain'
  },
  {
    _id: '36',
    name: 'Emperador Dark Marble',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble21/400/400',
    textureUrl: 'https://picsum.photos/seed/marble21/400/400',
    price: 95.99,
    dimensions: '12x12 inches',
    description: 'Dark emperador marble'
  },
  {
    _id: '37',
    name: 'Statuario Marble',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble22/400/400',
    textureUrl: 'https://picsum.photos/seed/marble22/400/400',
    price: 110.99,
    dimensions: '18x18 inches',
    description: 'Statuario marble with veining'
  },
  {
    _id: '38',
    name: 'Verde Guatemala Marble',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble23/400/400',
    textureUrl: 'https://picsum.photos/seed/marble23/400/400',
    price: 88.99,
    dimensions: '12x12 inches',
    description: 'Green marble from Guatemala'
  },
  {
    _id: '39',
    name: 'Rosa Levanto Marble',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble24/400/400',
    textureUrl: 'https://picsum.photos/seed/marble24/400/400',
    price: 98.99,
    dimensions: '16x16 inches',
    description: 'Pink-toned marble'
  },
  {
    _id: '40',
    name: 'Nero Marquina Marble',
    category: 'marble',
    imageUrl: 'https://picsum.photos/seed/marble25/400/400',
    textureUrl: 'https://picsum.photos/seed/marble25/400/400',
    price: 105.99,
    dimensions: '12x24 inches',
    description: 'Black marble with white veining'
  },
  {
    _id: '41',
    name: 'Absolute Black Granite',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite21/400/400',
    textureUrl: 'https://picsum.photos/seed/granite21/400/400',
    price: 68.99,
    dimensions: '12x12 inches',
    description: 'Pure black granite'
  },
  {
    _id: '42',
    name: 'Blue Pearl Granite',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite22/400/400',
    textureUrl: 'https://picsum.photos/seed/granite22/400/400',
    price: 78.99,
    dimensions: '18x18 inches',
    description: 'Blue granite with shimmer'
  },
  {
    _id: '43',
    name: 'Giallo Ornamental',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite23/400/400',
    textureUrl: 'https://picsum.photos/seed/granite23/400/400',
    price: 62.99,
    dimensions: '12x12 inches',
    description: 'Golden granite patterns'
  },
  {
    _id: '44',
    name: 'Red Dragon Granite',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite24/400/400',
    textureUrl: 'https://picsum.photos/seed/granite24/400/400',
    price: 74.99,
    dimensions: '16x16 inches',
    description: 'Red granite with veining'
  },
  {
    _id: '45',
    name: 'Verde Ubatuba',
    category: 'granite',
    imageUrl: 'https://picsum.photos/seed/granite25/400/400',
    textureUrl: 'https://picsum.photos/seed/granite25/400/400',
    price: 66.99,
    dimensions: '12x12 inches',
    description: 'Green granite from Brazil'
  },
  {
    _id: '46',
    name: 'Mother of Pearl Mosaic',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic21/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic21/400/400',
    price: 65.99,
    dimensions: '12x12 inches',
    description: 'Mother of pearl mosaic'
  },
  {
    _id: '47',
    name: 'Copper Mosaic',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic22/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic22/400/400',
    price: 58.99,
    dimensions: '12x12 inches',
    description: 'Copper metallic mosaic'
  },
  {
    _id: '48',
    name: 'Rainbow Glass Mosaic',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic23/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic23/400/400',
    price: 44.99,
    dimensions: '12x12 inches',
    description: 'Multi-colored glass mosaic'
  },
  {
    _id: '49',
    name: 'Basketweave Mosaic',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic24/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic24/400/400',
    price: 39.99,
    dimensions: '12x12 inches',
    description: 'Basketweave pattern mosaic'
  },
  {
    _id: '50',
    name: 'Pebble Mosaic Natural',
    category: 'mosaic',
    imageUrl: 'https://picsum.photos/seed/mosaic25/400/400',
    textureUrl: 'https://picsum.photos/seed/mosaic25/400/400',
    price: 41.99,
    dimensions: '12x12 inches',
    description: 'Natural pebble mosaic'
  },
  {
    _id: '51',
    name: 'Cherry Wood Look',
    category: 'wood-look',
    imageUrl: 'https://picsum.photos/seed/wood21/400/400',
    textureUrl: 'https://picsum.photos/seed/wood21/400/400',
    price: 42.99,
    dimensions: '6x36 inches',
    description: 'Cherry wood appearance'
  },
  {
    _id: '52',
    name: 'Whitewashed Wood',
    category: 'wood-look',
    imageUrl: 'https://picsum.photos/seed/wood22/400/400',
    textureUrl: 'https://picsum.photos/seed/wood22/400/400',
    price: 38.99,
    dimensions: '8x48 inches',
    description: 'Whitewashed wood look'
  },
  {
    _id: '53',
    name: 'Reclaimed Wood Look',
    category: 'wood-look',
    imageUrl: 'https://picsum.photos/seed/wood23/400/400',
    textureUrl: 'https://picsum.photos/seed/wood23/400/400',
    price: 45.99,
    dimensions: '7x48 inches',
    description: 'Reclaimed wood texture'
  },
  {
    _id: '54',
    name: 'Sandstone Look',
    category: 'stone-look',
    imageUrl: 'https://picsum.photos/seed/stone21/400/400',
    textureUrl: 'https://picsum.photos/seed/stone21/400/400',
    price: 39.99,
    dimensions: '16x16 inches',
    description: 'Sandstone texture'
  },
  {
    _id: '55',
    name: 'Fieldstone Look',
    category: 'stone-look',
    imageUrl: 'https://picsum.photos/seed/stone22/400/400',
    textureUrl: 'https://picsum.photos/seed/stone22/400/400',
    price: 44.99,
    dimensions: '12x24 inches',
    description: 'Fieldstone appearance'
  },
  {
    _id: '56',
    name: 'Brushed Steel Look',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern21/400/400',
    textureUrl: 'https://picsum.photos/seed/modern21/400/400',
    price: 52.99,
    dimensions: '12x24 inches',
    description: 'Brushed steel finish'
  },
  {
    _id: '57',
    name: 'Carbon Fiber Look',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern22/400/400',
    textureUrl: 'https://picsum.photos/seed/modern22/400/400',
    price: 58.99,
    dimensions: '24x24 inches',
    description: 'Carbon fiber pattern'
  },
  {
    _id: '58',
    name: 'Geometric Pattern',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern23/400/400',
    textureUrl: 'https://picsum.photos/seed/modern23/400/400',
    price: 46.99,
    dimensions: '12x12 inches',
    description: 'Geometric design'
  },
  {
    _id: '59',
    name: 'Textured Concrete',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern24/400/400',
    textureUrl: 'https://picsum.photos/seed/modern24/400/400',
    price: 41.99,
    dimensions: '18x36 inches',
    description: 'Textured concrete'
  },
  {
    _id: '60',
    name: 'Holographic Tile',
    category: 'modern',
    imageUrl: 'https://picsum.photos/seed/modern25/400/400',
    textureUrl: 'https://picsum.photos/seed/modern25/400/400',
    price: 75.99,
    dimensions: '8x8 inches',
    description: 'Holographic finish'
  }
];

router.get('/', async (req, res) => {
  try {
    const tiles = await Tile.find();
    if (tiles.length === 0) {
      res.json(mockTiles);
    } else {
      res.json(tiles);
    }
  } catch (error) {
    res.json(mockTiles);
  }
});

// GET tile by ID
router.get('/:id', async (req, res) => {
  try {
    const tile = await Tile.findById(req.params.id);
    if (!tile) {
      const mockTile = mockTiles.find(t => t._id === req.params.id);
      if (mockTile) {
        res.json(mockTile);
      } else {
        res.status(404).json({ message: 'Tile not found' });
      }
    } else {
      res.json(tile);
    }
  } catch (error) {
    const mockTile = mockTiles.find(t => t._id === req.params.id);
    if (mockTile) {
      res.json(mockTile);
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

// POST create new tile
router.post('/', async (req, res) => {
  try {
    const tile = new Tile(req.body);
    const newTile = await tile.save();
    res.status(201).json(newTile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update tile
router.put('/:id', async (req, res) => {
  try {
    const tile = await Tile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tile) {
      res.status(404).json({ message: 'Tile not found' });
    } else {
      res.json(tile);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE tile
router.delete('/:id', async (req, res) => {
  try {
    const tile = await Tile.findByIdAndDelete(req.params.id);
    if (!tile) {
      res.status(404).json({ message: 'Tile not found' });
    } else {
      res.json({ message: 'Tile deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
