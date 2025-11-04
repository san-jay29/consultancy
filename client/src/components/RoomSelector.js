import React from 'react';
import './RoomSelector.css';

const rooms = [
  { id: 'living-room', name: 'Living Room', icon: '🛋️' },
  { id: 'kitchen', name: 'Kitchen', icon: '🍳' },
  { id: 'bathroom', name: 'Bathroom', icon: '🚿' }
];

function RoomSelector({ selectedRoom, onRoomChange }) {
  return (
    <div className="room-selector">
      <h2>Select Room Type</h2>
      <div className="room-buttons">
        {rooms.map(room => (
          <button
            key={room.id}
            className={`room-btn ${selectedRoom === room.id ? 'active' : ''}`}
            onClick={() => onRoomChange(room.id)}
          >
            <span className="room-name">{room.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RoomSelector;