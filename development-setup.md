# Development Environment Setup Guide

## 🛠️ Complete Development Stack Setup

### For Current Static Projects (HTML/CSS/JS)
```bash
# Install development dependencies
npm install

# Start development server
npm run serve

# Your homepage: http://localhost:3000
# Test app: http://localhost:3001
```

### For Future React + Backend + AI Projects

#### 1. Frontend (React)
```bash
# Create React app
npx create-react-app my-app-name
cd my-app-name
npm start  # Runs on http://localhost:3000
```

#### 2. Backend (Node.js + Express)
```bash
# Create backend directory
mkdir my-app-backend
cd my-app-backend
npm init -y

# Install backend dependencies
npm install express cors dotenv
npm install -D nodemon

# For AI/LLM integration
npm install openai @anthropic-ai/sdk

# For database
npm install mongoose  # MongoDB
# OR
npm install pg        # PostgreSQL
```

#### 3. Full-Stack Development Workflow
```bash
# Terminal 1: Frontend (React)
cd frontend
npm start  # http://localhost:3000

# Terminal 2: Backend (Node.js/Express)
cd backend
npm run dev  # http://localhost:5000

# Terminal 3: Database
mongod  # MongoDB
# OR
pg_ctl start  # PostgreSQL
```

## 🗄️ Database Options for Your Projects

### Beginner-Friendly
- **Firebase**: Real-time database, easy setup
- **Supabase**: PostgreSQL with real-time features
- **MongoDB Atlas**: Cloud MongoDB, free tier

### Local Development
- **SQLite**: File-based, no server needed
- **MongoDB**: Document database
- **PostgreSQL**: Relational database

## 🤖 AI/LLM Integration Setup

### Environment Variables (.env file)
```bash
# OpenAI
OPENAI_API_KEY=your_openai_key

# Anthropic Claude
ANTHROPIC_API_KEY=your_anthropic_key

# Database
DATABASE_URL=your_database_connection_string

# Server
PORT=5000
NODE_ENV=development
```

### Recommended AI Services
- **OpenAI GPT**: Text generation, code assistance
- **Anthropic Claude**: Advanced reasoning
- **Google Gemini**: Multimodal AI
- **Hugging Face**: Open-source models

## 🔧 Development Tools

### Essential VS Code Extensions
```bash
# Install via VS Code or command line
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension esbenp.prettier-vscode
code --install-extension ms-vscode.vscode-eslint
code --install-extension ms-vscode.vscode-json
code --install-extension bradlc.vscode-tailwindcss
code --install-extension ms-vscode.vscode-react
```

### Git Setup (Version Control)
```bash
# Initialize Git repository
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

## 📱 Testing Strategy

### Local Testing
```bash
# Static files (current setup)
npm run serve

# React app
npm start

# Backend API
npm run dev

# Full-stack
npm run dev  # Runs both frontend and backend
```

### Production Testing
```bash
# Build React app
npm run build

# Test production build locally
npx serve -s build

# Deploy to various platforms
# - Netlify (frontend)
# - Vercel (full-stack)
# - Railway (backend)
# - GitHub Pages (static)
```

## 🌐 Deployment Platforms

### Frontend Only
- **GitHub Pages**: Free, easy setup
- **Netlify**: Advanced features, free tier
- **Vercel**: Optimized for React/Next.js

### Full-Stack Applications
- **Vercel**: Frontend + serverless backend
- **Railway**: Full-stack with database
- **Render**: Free tier for full-stack apps
- **Heroku**: Classic platform (paid)

### Database Hosting
- **MongoDB Atlas**: Free 512MB cluster
- **Supabase**: Free PostgreSQL + real-time
- **PlanetScale**: Serverless MySQL
- **Firebase**: Google's real-time database

## 🚀 Project Structure Recommendations

### Current Static Projects
```
moksh_page/
├── index.html
├── styles.css
├── script.js
├── test-app/
└── package.json
```

### Future React + Backend Projects
```
my-app/
├── frontend/          # React app
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js/Express
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── package.json
├── shared/            # Shared types/utils
└── docker-compose.yml # For local development
```

## 🔄 Development Workflow

### 1. Start Development
```bash
# Current projects
npm run serve

# Future React projects
npm run dev  # Starts both frontend and backend
```

### 2. Make Changes
- Edit code in VS Code
- Changes auto-reload in browser
- Test API endpoints
- Check database connections

### 3. Version Control
```bash
git add .
git commit -m "Add new feature"
git push
```

### 4. Deploy
```bash
# Static sites
git push  # Auto-deploys to GitHub Pages

# React apps
npm run build
npm run deploy
```

This setup will grow with you from simple static sites to complex full-stack AI applications!