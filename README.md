# 🏛️ Tile Showroom - Professional 3D Tile Visualizer

A stunning, professional tile showroom website with an interactive 3D visualizer that allows customers to preview tiles in realistic room settings. Built with React, Three.js, Node.js, and Express.

![Tile Showroom](https://img.shields.io/badge/Status-Ready-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.160.0-orange)
![Node.js](https://img.shields.io/badge/Node.js-16+-green)

---

## ✨ Features

### 🎨 3D Visualization
- **Real-time 3D rendering** using Three.js
- **Interactive camera controls** (rotate, zoom, pan)
- **Three room types**: Living Room, Kitchen, Bathroom
- **Realistic lighting and shadows**
- **Instant tile preview** on floors and walls

### 🎯 Extensive Tile Catalog
- **34+ Premium Tiles** across 8 categories:
  - Ceramic (4 designs)
  - Porcelain (4 designs)
  - Marble (4 designs)
  - Granite (4 designs)
  - Mosaic (4 designs)
  - Wood-Look (4 designs)
  - Stone-Look (4 designs)
  - Modern/Contemporary (6 designs)

### 💼 Business Features
- **Quote Request System** - Customers can request pricing
- **Category Filtering** - Easy navigation by tile type
- **Featured Tiles** - Highlight premium selections
- **Stock Status** - Real-time availability
- **Detailed Specifications** - Size, finish, color, price

### 📱 User Experience
- **Fully Responsive** - Works on desktop, tablet, mobile
- **Modern UI** - Beautiful gradient design
- **Smooth Animations** - Professional transitions
- **Easy Navigation** - Intuitive interface

---

## 🚀 Quick Start

### Easiest Method (Windows)
Double-click **`start-all.bat`** - That's it! 🎉

### Manual Method

**1. Start Backend Server:**
```bash
cd "d:\google tile\tile-showroom\server"
npm install
npm start
```
✅ Server: http://localhost:5000

**2. Start Frontend Client:**
```bash
cd "d:\google tile\tile-showroom\client"
npm install
npm start
```
✅ Client: http://localhost:3000

---

## 📋 Prerequisites

- **Node.js** v16 or higher ([Download](https://nodejs.org/))
- **Modern Browser** (Chrome, Firefox, Safari, Edge)
- **MongoDB** (Optional - app works with mock data)

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Three.js** - 3D graphics engine
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful Three.js helpers
- **Axios** - HTTP client
- **CSS3** - Modern styling

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **MongoDB** - Database (optional)
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin support

---

## 📁 Project Structure

```
tile-showroom/
│
├── client/                      # React Frontend
│   ├── public/
│   │   └── index.html          # HTML template
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── Header.js       # Navigation header
│   │   │   ├── RoomSelector.js # Room type selector
│   │   │   ├── TileVisualizer.js # 3D visualizer
│   │   │   ├── TileCatalog.js  # Tile grid
│   │   │   └── QuoteModal.js   # Quote request form
│   │   ├── App.js              # Main app component
│   │   ├── App.css             # App styles
│   │   └── index.js            # Entry point
│   └── package.json
│
├── server/                      # Express Backend
│   ├── models/
│   │   ├── Tile.js             # Tile model
│   │   └── Quote.js            # Quote model
│   ├── routes/
│   │   ├── tiles.js            # Tile API routes
│   │   └── quotes.js           # Quote API routes
│   ├── server.js               # Server entry point
│   ├── .env                    # Environment variables
│   └── package.json
│
├── start-all.bat               # Windows startup script
├── start-server.bat            # Start backend only
├── start-client.bat            # Start frontend only
├── README.md                   # This file
├── QUICKSTART.md               # Quick start guide
├── INSTALLATION.md             # Detailed installation
└── FEATURES.md                 # Complete feature list
```

---

## 🎮 How to Use

### 1. Select Room Type
Choose between:
- 🛋️ **Living Room** - Perfect for floor tiles
- 🍳 **Kitchen** - Shows floor and backsplash
- 🚿 **Bathroom** - Displays wet area applications

### 2. Browse Tiles
- Scroll through 34+ tile designs
- Filter by category (Ceramic, Marble, Modern, etc.)
- View specifications (size, finish, price)

### 3. Visualize in 3D
- Click any tile to see it in the room
- **Drag** to rotate the view
- **Scroll** to zoom in/out
- **Right-click + Drag** to pan

### 4. Request Quote
- Click "Request Quote" button
- Fill in your details
- Submit for pricing information

---

## 🌐 API Endpoints

### Tiles
- `GET /api/tiles` - Get all tiles
- `GET /api/tiles/featured` - Get featured tiles
- `GET /api/tiles/category/:category` - Filter by category
- `GET /api/tiles/:id` - Get single tile
- `POST /api/tiles` - Add new tile (admin)

### Quotes
- `GET /api/quotes` - Get all quotes (admin)
- `POST /api/quotes` - Submit quote request
- `GET /api/quotes/:id` - Get single quote
- `PUT /api/quotes/:id` - Update quote (admin)
- `DELETE /api/quotes/:id` - Delete quote (admin)

---

## 🎨 Tile Categories

| Category | Count | Features |
|----------|-------|----------|
| Ceramic | 4 | Classic, affordable, versatile |
| Porcelain | 4 | Durable, marble-look, premium |
| Marble | 4 | Luxury, polished, elegant |
| Granite | 4 | Natural stone, unique patterns |
| Mosaic | 4 | Decorative, accent pieces |
| Wood-Look | 4 | Realistic wood grain |
| Stone-Look | 4 | Natural stone texture |
| Modern | 6 | Contemporary, trendy designs |

---

## 🔧 Configuration

### Environment Variables (server/.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/tile-showroom
NODE_ENV=development
```

### MongoDB (Optional)
The app works perfectly without MongoDB using mock data. To use MongoDB:
1. Install MongoDB Community Edition
2. Start MongoDB service
3. App will auto-connect

---

## 📱 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Recommended |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| Opera | ✅ Full Support |

**Note:** WebGL required for 3D visualization

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change server port in server/.env
PORT=5001
```

### MongoDB Connection Error
Don't worry! App automatically uses mock data with all 34 tiles.

### Module Not Found
```bash
# Reinstall dependencies
cd server
rm -rf node_modules package-lock.json
npm install

cd ../client
rm -rf node_modules package-lock.json
npm install
```

### 3D Visualizer Not Loading
- Use a modern browser (Chrome recommended)
- Enable WebGL in browser settings
- Update graphics drivers

---

## 📚 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 2 minutes
- **[INSTALLATION.md](INSTALLATION.md)** - Detailed setup guide
- **[FEATURES.md](FEATURES.md)** - Complete feature documentation

---

## 🚀 Future Enhancements

- [ ] User authentication and accounts
- [ ] AR visualization (view tiles in your actual room)
- [ ] Shopping cart and checkout
- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] Customer reviews and ratings
- [ ] Sample ordering system
- [ ] Installation cost calculator
- [ ] Social media sharing
- [ ] Multi-language support

---

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---

## 💡 Support

For questions or issues:
1. Check the documentation files
2. Review the troubleshooting section
3. Create an issue on GitHub

---

## 🎉 Acknowledgments

Built with:
- React.js for the UI
- Three.js for 3D graphics
- Express.js for the backend
- MongoDB for data storage
- Love and coffee ☕

---

**Made with ❤️ for tile showrooms and interior design professionals**

**🌟 Star this project if you find it useful!**