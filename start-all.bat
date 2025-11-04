@echo off
echo ========================================
echo Starting Tile Showroom Application
echo ========================================
echo.
echo This will open two terminal windows:
echo 1. Backend Server (Port 5000)
echo 2. Frontend Client (Port 3000)
echo.
echo Press any key to continue...
pause > nul

start "Tile Showroom - Backend" cmd /k "cd server && npm install && npm start"
timeout /t 3 > nul
start "Tile Showroom - Frontend" cmd /k "cd client && npm install && npm start"

echo.
echo ========================================
echo Both servers are starting...
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo ========================================
echo.
echo Your browser should open automatically.
echo If not, navigate to http://localhost:3000
echo.