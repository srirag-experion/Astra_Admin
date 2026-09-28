# Astra Admin — Decoupled React Frontend & Node.js Express Backend

This repository contains two independently deployable applications:
- `frontend/`: React single-page admin dashboard built with Vite, React Router, Lucide Icons, and Axios.
- `backend/`: Node.js Express REST API server configured with CORS, Helmet security, and error management.

---

## 🚀 Getting Started Locally

### 1. Start the Backend API Server
```bash
cd backend
npm install
npm run dev
```
The Express server will start at `http://localhost:5000`.

### 2. Start the Frontend React App
In a new terminal window:
```bash
cd frontend
npm install
npm run dev
```
The React development server will start at `http://localhost:5173`.

---

## 🌐 Independent Deployment Guide

### Deploying the Frontend (`frontend/`)
- Platform: **Vercel**, **Netlify**, or **Cloudflare Pages**.
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_BASE_URL`: `https://your-backend-domain.com/api/v1`

### Deploying the Backend (`backend/`)
- Platform: **Render**, **Railway**, **AWS ECS/AppRunner**, or **DigitalOcean**.
- **Root Directory**: `backend`
- **Build/Start Command**: `npm start`
- **Environment Variables**:
  - `PORT`: `5000` (or host provided port)
  - `CORS_ORIGIN`: `https://your-frontend-domain.vercel.app`
  - `NODE_ENV`: `production`
