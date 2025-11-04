@echo off
echo ========================================
echo Starting Tile Showroom Backend Server
echo ========================================
echo.
cd server
echo Installing dependencies if needed...
call npm install
echo.
echo Starting server on http://localhost:5000
echo.
call npm start