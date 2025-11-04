# 🚀 Quick Start Guide

## Fastest Way to Run the Application

### Windows Users (Easiest Method)

Simply double-click: **`start-all.bat`**

This will automatically:
1. Install all dependencies
2. Start the backend server
3. Start the frontend client
4. Open your browser to http://localhost:3000

---

## Manual Start (Alternative Method)

### Step 1: Start Backend Server
Open Command Prompt or PowerShell:
```bash
cd "d:\google tile\tile-showroom\server"
npm install
npm start
```
✅ Server running on http://localhost:5000

### Step 2: Start Frontend Client
Open a NEW Command Prompt or PowerShell:
```bash
cd "d:\google tile\tile-showroom\client"
npm install
npm start
```
✅ Client running on http://localhost:3000

---

## First Time Setup

If this is your first time running the app:

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Choose LTS version
   - Restart your computer after installation

2. **Run the application**
   - Double-click `start-all.bat`
   - Wait for dependencies to install (first time only)
   - Browser will open automatically

---

## What You'll See

1. **Homepage** with header and navigation
2. **Room Selector** - Choose Living Room, Kitchen, or Bathroom
3. **3D Visualizer** - Interactive 3D room with tiles
4. **Tile Catalog** - Browse 34+ tile designs
5. **Category Filters** - Filter by tile type
6. **Quote Button** - Request pricing quotes

---

## How to Use

### Viewing Tiles in 3D
1. Select a room type (Living Room, Kitchen, or Bathroom)
2. Click any tile from the catalog
3. See it instantly applied in the 3D room
4. Use mouse to:
   - **Drag** = Rotate view
   - **Scroll** = Zoom in/out
   - **Right-click + Drag** = Pan

### Requesting a Quote
1. Select your desired tile
2. Click "Request Quote" button
3. Fill in your details
4. Submit the form
5. Receive confirmation

### Filtering Tiles
- Click category buttons to filter
- "All Tiles" shows everything
- Each category shows specific tile types

---

## Troubleshooting

### "npm is not recognized"
- Install Node.js from https://nodejs.org/
- Restart your computer
- Try again

### Port Already in Use
- Close other applications using ports 3000 or 5000
- Or edit `server/.env` to change the port

### Browser Doesn't Open
- Manually go to: http://localhost:3000

### 3D Visualizer Not Working
- Make sure you're using a modern browser (Chrome, Firefox, Edge)
- Enable WebGL in browser settings
- Update your graphics drivers

---

## System Requirements

- **OS**: Windows 10/11, macOS, or Linux
- **Node.js**: Version 16 or higher
- **RAM**: 4GB minimum
- **Browser**: Chrome, Firefox, Safari, or Edge (latest version)
- **Internet**: Required for initial setup

---

## Need Help?

Check these files:
- `README.md` - Project overview
- `INSTALLATION.md` - Detailed installation guide
- `FEATURES.md` - Complete feature list

---

**Enjoy your Tile Showroom! 🏛️✨**