import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import TileVisualizer from './components/TileVisualizer';
import TileCatalog from './components/TileCatalog';
import QuoteModal from './components/QuoteModal';
import RoomSelector from './components/RoomSelector';
import './App.css';
import { formatINR } from './utils/currency';

function App() {
  const [tiles, setTiles] = useState([]);
  const [selectedTile, setSelectedTile] = useState(null);
  const [roomType, setRoomType] = useState('living-room');
  const [loading, setLoading] = useState(true);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchTiles();
  }, []);

  const fetchTiles = async () => {
    try {
      const response = await axios.get('/api/tiles');
      setTiles(response.data);
      if (response.data.length > 0) {
        setSelectedTile(response.data[0]);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tiles:', error);
      setLoading(false);
    }
  };

  const handleTileSelect = (tile) => {
    setSelectedTile(tile);
  };

  const handleRoomChange = (room) => {
    setRoomType(room);
  };

  const handleRequestQuote = () => {
    setShowQuoteModal(true);
  };

  const filteredTiles = selectedCategory === 'all' 
    ? tiles 
    : tiles.filter(tile => tile.category === selectedCategory);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
        <p>Loading Tile Showroom...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Header onRequestQuote={handleRequestQuote} />
      
      <main className="main-content">
        <div className="visualizer-section">
          <RoomSelector 
            selectedRoom={roomType} 
            onRoomChange={handleRoomChange} 
          />
          
          <div className="visualizer-container">
            <TileVisualizer 
              selectedTile={selectedTile}
              roomType={roomType}
            />
          </div>

          {selectedTile && (
            <div className="selected-tile-info">
              <h3>{selectedTile.name}</h3>
              <p className="tile-price">{formatINR(selectedTile.price)} {selectedTile.priceUnit}</p>
              <p className="tile-details">
                {selectedTile.size} • {selectedTile.finish} finish
              </p>
              <button className="quote-btn" onClick={handleRequestQuote}>
                Request Quote
              </button>
            </div>
          )}
        </div>

        <div className="catalog-section">
          <TileCatalog 
            tiles={filteredTiles}
            selectedTile={selectedTile}
            onTileSelect={handleTileSelect}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </main>

      {showQuoteModal && (
        <QuoteModal 
          selectedTile={selectedTile}
          roomType={roomType}
          onClose={() => setShowQuoteModal(false)}
        />
      )}
    </div>
  );
}

export default App;