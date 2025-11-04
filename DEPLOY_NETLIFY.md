# Deploy to Netlify

This tile showroom app is configured for easy deployment to Netlify with serverless functions.

## Quick Deploy

### Option 1: Drag & Drop (Fastest)
1. Build the project locally:
   ```bash
   cd client
   npm run build
   ```

2. Zip the entire project folder (`tile-showroom advance`)

3. Go to [Netlify](https://app.netlify.com/) and drag the zip file to deploy

### Option 2: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket

2. Connect your repository to Netlify:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your repository
   - Build settings will be auto-detected from `netlify.toml`

### Option 3: Netlify CLI
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build and deploy:
   ```bash
   cd client
   npm run build
   cd ..
   netlify deploy --prod
   ```

## Configuration

The app is configured with:
- **Build Command**: `npm run build` (in client directory)
- **Publish Directory**: `client/build`
- **Functions Directory**: `netlify/functions`
- **API Routes**: Redirected to Netlify Functions (`/api/*` → `/.netlify/functions/*`)

## Features Included

✅ **Frontend**: React app with INR currency formatting  
✅ **Backend**: Serverless functions for tiles and quotes API  
✅ **Routing**: Client-side routing support  
✅ **CORS**: Properly configured for cross-origin requests  
✅ **Environment**: Production-ready build  

## API Endpoints (Serverless)

- `GET /api/tiles` - Get all tiles
- `GET /api/tiles/:id` - Get specific tile
- `POST /api/quotes` - Submit quote request

## After Deployment

Your tile showroom will be available at your Netlify URL (e.g., `https://your-site-name.netlify.app`) with:
- Full tile catalog with INR pricing (₹)
- Interactive tile selection
- Quote request functionality
- Responsive design

## Troubleshooting

- If API calls fail, check the Functions tab in Netlify dashboard
- For build issues, check the Deploy logs in Netlify
- Ensure all dependencies are in `client/package.json`