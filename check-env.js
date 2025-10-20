#!/usr/bin/env node

console.log(`
╭─────────────────────────────────────╮
│     Development Environment        │
│          Setup Check               │
╰─────────────────────────────────────╯
`);

// Check Node.js version
try {
    console.log(`✅ Node.js: ${process.version}`);
} catch (error) {
    console.log(`❌ Node.js: Not installed`);
    process.exit(1);
}

// Check npm version
const { execSync } = require('child_process');

try {
    const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
    console.log(`✅ npm: v${npmVersion}`);
} catch (error) {
    console.log(`❌ npm: Not available`);
}

console.log(`
🚀 Development Server Options:

1. Current Static Projects:
   npm run serve        → http://localhost:3000
   
2. Future React Projects:
   npx create-react-app my-app
   cd my-app && npm start → http://localhost:3000

3. Backend Development:
   npm init -y
   npm install express
   node server.js       → http://localhost:5000

📝 Next Steps:
1. Install Node.js from nodejs.org if not installed
2. Run 'npm install' in this directory
3. Run 'npm run serve' to start development server
4. Your homepage will open at http://localhost:3000

💡 Pro Tips:
- Use 'npm run dev' for development mode
- Press Ctrl+C to stop servers
- Use multiple terminals for frontend + backend
- Install VS Code Live Server extension for quick testing
`);

// Check if package.json dependencies are installed
const fs = require('fs');
const path = require('path');

if (fs.existsSync(path.join(__dirname, 'node_modules'))) {
    console.log(`✅ Dependencies: Installed`);
    console.log(`🎯 Ready to run: npm run serve`);
} else {
    console.log(`⚠️  Dependencies: Run 'npm install' first`);
}