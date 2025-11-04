import React from 'react';
import './TileCatalog.css';
import { formatINR } from '../utils/currency';

const categories = [
  { id: 'all', name: 'All Tiles', icon: '' },
  { id: 'ceramic', name: 'Ceramic', icon: '' },
  { id: 'porcelain', name: 'Porcelain', icon: '' },
  { id: 'marble', name: 'Marble', icon: '' },
  { id: 'granite', name: 'Granite', icon: '' },
  { id: 'mosaic', name: 'Mosaic', icon: '' },
  { id: 'wood-look', name: 'Wood-Look', icon: '' },
  { id: 'stone-look', name: 'Stone-Look', icon: '' },
  { id: 'modern', name: 'Modern', icon: '' }
];

function TileCatalog({ tiles, selectedTile, onTileSelect, selectedCategory, onCategoryChange }) {
  return (
    <div className="tile-catalog">
      <h2>Tile Catalog</h2>
      <p className="catalog-subtitle">{tiles.length} tiles available</p>
      
      {/* Category Filter */}
      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Tile Grid */}
      <div className="tile-grid">
        {tiles.map((tile) => (
          <div
            key={tile.id || tile._id}
            className={`tile-card ${selectedTile?.id === tile.id || selectedTile?._id === tile._id ? 'selected' : ''}`}
            onClick={() => onTileSelect(tile)}
          >
            <div className="tile-image">
              <img 
                src={tile.imageUrl} 
                alt={tile.name}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
                onLoad={(e) => {
                  e.target.style.display = 'block';
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.display = 'none';
                  }
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <span className="placeholder-icon">🏗️</span>
                <span className="placeholder-text">Tile Preview</span>
              </div>
              {tile.featured && <span className="featured-badge">⭐ Featured</span>}
            </div>
            
            <div className="tile-info">
              <h3>{tile.name}</h3>
              <p className="tile-category">{tile.category}</p>
              <div className="tile-specs">
                <span className="tile-dimensions">📏 {tile.dimensions}</span>
              </div>
              <div className="tile-footer">
                <span className="tile-price">{formatINR(tile.price)}</span>
                <span className="tile-description">{tile.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {tiles.length === 0 && (
        <div className="no-tiles">
          <p>No tiles found in this category</p>
        </div>
      )}
    </div>
  );
}

export default TileCatalog;