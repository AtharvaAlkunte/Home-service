# Render Deployment Guide

## ✅ Fixed Issues

The deployment error has been fixed by:

1. **Added `start` script** to package.json
2. **Updated server.js** to serve React frontend in production
3. **Created render.yaml** configuration file

## 🚀 How to Deploy on Render

### Option 1: Automatic (using render.yaml)

1. Push your code to GitHub
2. Go to Render Dashboard
3. Click "New +" → "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect `render.yaml` and configure everything

### Option 2: Manual Setup

1. **Create a new Web Service on Render:**
   - Connect your GitHub repository
   - Set the following:
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`
     - **Environment:** Node

2. **Add Environment Variables in Render Dashboard:**
   ```
   NODE_ENV = production
   MONGODB_URI = mongodb+srv://alkunteatharva19_db_user:Oeu2SQxKEZAB25FV@cluster0.dlgp6tj.mongodb.net/homeserve_db?retryWrites=true&w=majority
   PORT = 5000
   ```

3. **Deploy!**

## 📝 What Changed

### 1. package.json
```json
"scripts": {
  "start": "node src/server/server.js",  // ← Added for Render
  "build:all": "npm run build && npm install"  // ← Added for convenience
}
```

### 2. server.js
- Added production mode to serve React build files
- Express now serves the static `dist` folder when `NODE_ENV=production`
- All routes not matching `/api/*` will return the React app

### 3. render.yaml
- Auto-configuration file for Render deployment
- Specifies build and start commands
- Defines required environment variables

## 🔧 How It Works

**Development:**
- Frontend: `npm run dev` (Vite dev server on port 5173)
- Backend: `npm run server` (Express on port 5000)

**Production (Render):**
1. Render runs: `npm install && npm run build`
2. Vite builds React app into `dist/` folder
3. Render runs: `npm start`
4. Express server starts and serves:
   - API routes: `/api/bookings`
   - Static files: Everything from `dist/`
   - React app: All other routes

## 🌐 Accessing Your App

After deployment:
- **Frontend:** `https://your-app-name.onrender.com`
- **API:** `https://your-app-name.onrender.com/api/bookings`
- **Health Check:** `https://your-app-name.onrender.com/api/health`

## ⚠️ Important Notes

1. **MongoDB Connection:** Make sure your MongoDB cluster allows connections from Render's IP addresses (use `0.0.0.0/0` in MongoDB Atlas network access)

2. **Environment Variables:** Never commit `.env` file. Add all variables in Render dashboard

3. **Free Tier:** Render free tier spins down after 15 minutes of inactivity. First request after spin-down takes ~50 seconds

4. **Database:** All booking data is stored in MongoDB Atlas, so it persists across deployments

## 🐛 Troubleshooting

**"Missing script: start" error:**
- ✅ Fixed! The start script is now in package.json

**MongoDB Connection Error:**
- Check if MONGODB_URI is set in Render environment variables
- Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

**Frontend not loading:**
- Check if build command runs successfully
- Verify dist folder is being created
- Check logs for any errors

**API not working:**
- Check if MongoDB is connected (look for "✅ MongoDB Connected Successfully")
- Verify environment variables are set correctly
