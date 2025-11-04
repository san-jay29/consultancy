import React, { useState } from 'react';
import axios from 'axios';
import './QuoteModal.css';
import { formatINR } from '../utils/currency';

function QuoteModal({ selectedTile, roomType, onClose }) {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    address: '',
    quantity: '',
    unit: 'sq ft',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const quoteData = {
        ...formData,
        tiles: [{
          tileId: selectedTile?.id || selectedTile?._id,
          tileName: selectedTile?.name,
          quantity: formData.quantity,
          unit: formData.unit
        }],
        roomType: roomType
      };

      const response = await axios.post('/api/quotes', quoteData);
      
      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      }
    } catch (err) {
      setError('Failed to submit quote request. Please try again.');
      console.error('Quote submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content success-message" onClick={(e) => e.stopPropagation()}>
          <div className="success-icon">✓</div>
          <h2>Quote Request Submitted!</h2>
          <p>Thank you for your interest. We'll contact you soon with a detailed quote.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <h2>Request a Quote</h2>
        
        {selectedTile && (
          <div className="quote-tile-info">
            <img src={selectedTile.imageUrl} alt={selectedTile.name} />
            <div>
              <h3>{selectedTile.name}</h3>
              <p>{formatINR(selectedTile.price)} {selectedTile.priceUnit}</p>
              <p className="room-info">Room: {roomType.replace('-', ' ')}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1 234 567 8900"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Main St, City, State"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Quantity *</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
                min="1"
                placeholder="100"
              />
            </div>

            <div className="form-group">
              <label>Unit</label>
              <select name="unit" value={formData.unit} onChange={handleChange}>
                <option value="sq ft">Square Feet</option>
                <option value="sq m">Square Meters</option>
                <option value="boxes">Boxes</option>
                <option value="pieces">Pieces</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requirements or questions..."
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Quote Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuoteModal;