@echo off
echo ========================================
echo Starting Tile Showroom Frontend Client
echo ========================================
echo.
cd client
echo Installing dependencies if needed...
call npm install
echo.
echo Starting client on http://localhost:3000
echo.
call npm start