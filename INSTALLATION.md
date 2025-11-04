# Installation Guide - Tile Showroom

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (Optional - the app works with mock data if MongoDB is not available)

## Installation Steps

### 1. Install Server Dependencies

Open a terminal and navigate to the server directory:

```bash
cd "d:\google tile\tile-showroom\server"
npm install
```

### 2. Install Client Dependencies

Open another terminal and navigate to the client directory:

```bash
cd "d:\google tile\tile-showroom\client"
npm install
```

## Running the Application

### Option 1: Run Both Server and Client Separately

**Terminal 1 - Start the Backend Server:**
```bash
cd "d:\google tile\tile-showroom\server"
npm start
```
The server will run on: http://localhost:5000

**Terminal 2 - Start the Frontend Client:**
```bash
cd "d:\google tile\tile-showroom\client"
npm start
```
The client will run on: http://localhost:3000

### Option 2: Development Mode with Nodemon

**For Server (with auto-restart):**
```bash
cd "d:\google tile\tile-showroom\server"
npm run dev
```

## MongoDB Setup (Optional)

If you want to use MongoDB instead of mock data:

1. Install MongoDB Community Edition
2. Start MongoDB service
3. The app will automatically connect to: `mongodb://localhost:27017/tile-showroom`

**Note:** The application works perfectly fine without MongoDB using mock data with 34 pre-loaded tiles!

## Accessing the Application

Once both server and client are running:

1. Open your browser
2. Go to: **http://localhost:3000**
3. You should see the Tile Showroom homepage

## Features to Try

1. **Select Room Type** - Choose between Living Room, Kitchen, or Bathroom
2. **Browse Tiles** - Scroll through 34+ different tile designs
3. **3D Visualization** - Click any tile to see it in the 3D room
4. **Filter by Category** - Use category buttons to filter tiles
5. **Request Quote** - Click "Request Quote" to submit an inquiry

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

**For Server (change port):**
Edit `server/.env` and change:
```
PORT=5001
```

**For Client:**
The app will prompt you to use a different port automatically.

### MongoDB Connection Error

If you see MongoDB connection errors, don't worry! The app will automatically use mock data with all 34 tiles pre-loaded.

### Module Not Found Errors

If you get module errors, try:
```bash
# Delete node_modules and reinstall
cd server
rm -rf node_modules package-lock.json
npm install

cd ../client
rm -rf node_modules package-lock.json
npm install
```

## Project Structure

```
tile-showroom/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
│
├── server/                # Express backend
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── server.js         # Server entry point
│   └── package.json
│
└── README.md
```

## Technologies Used

- **Frontend:** React, Three.js, @react-three/fiber, @react-three/drei
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **3D Graphics:** Three.js for realistic room visualization

## Support

For issues or questions, please check the README.md file or create an issue in the project repository.

Enjoy your Tile Showroom! 🏛️✨