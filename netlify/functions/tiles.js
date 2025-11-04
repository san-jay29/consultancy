exports.handler = async (event, context) => {
  // Mock tiles data - same as from server/routes/tiles.js
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
    }
    // Add more tiles as needed...
  ];

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod === 'GET') {
    // Handle GET /api/tiles
    if (event.path === '/.netlify/functions/tiles') {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(mockTiles)
      };
    }

    // Handle GET /api/tiles/:id
    const pathSegments = event.path.split('/');
    if (pathSegments.length === 5 && pathSegments[4]) {
      const tileId = pathSegments[4];
      const tile = mockTiles.find(t => t._id === tileId);
      
      if (tile) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify(tile)
        };
      } else {
        return {
          statusCode: 404,
          headers,
          body: JSON.stringify({ message: 'Tile not found' })
        };
      }
    }
  }

  return {
    statusCode: 404,
    headers,
    body: JSON.stringify({ message: 'Not found' })
  };
};