// Soccer Game JavaScript
class SoccerGame {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Game state
        this.gameState = 'menu'; // menu, playing, paused, gameOver
        this.score = 0;
        this.goals = 0;
        this.shots = 0;
        this.startTime = 0;
        this.gameTime = 0;
        
        // Game objects
        this.player = {
            x: 100,
            y: 300,
            width: 30,
            height: 30,
            speed: 5,
            color: '#ff6b6b'
        };
        
        this.ball = {
            x: 400,
            y: 300,
            width: 20,
            height: 20,
            speed: 8,
            velocityX: 0,
            velocityY: 0,
            friction: 0.95,
            color: '#ffffff'
        };
        
        this.goal = {
            x: 750,
            y: 200,
            width: 50,
            height: 200,
            color: '#ffffff'
        };
        
        // Input handling
        this.keys = {};
        this.setupEventListeners();
        
        // Start game loop
        this.gameLoop();
        
        // Show initial message
        this.showMessage('Welcome to Soccer Game!', 'Use WASD or arrow keys to move, Spacebar to kick!', 'Start Game');
    }
    
    setupEventListeners() {
        // Keyboard events
        document.addEventListener('keydown', (e) => {
            this.keys[e.code] = true;
            
            // Handle special keys
            if (e.code === 'Space') {
                e.preventDefault();
                this.kickBall();
            }
            if (e.code === 'KeyR') {
                this.resetGame();
            }
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        // Mobile controls
        this.setupMobileControls();
        
        // Message button
        document.getElementById('messageBtn').addEventListener('click', () => {
            this.startGame();
        });
        
        // Canvas click for kicking
        this.canvas.addEventListener('click', () => {
            if (this.gameState === 'playing') {
                this.kickBall();
            }
        });
    }
    
    setupMobileControls() {
        const moveButtons = document.querySelectorAll('[data-direction]');
        const kickButton = document.getElementById('kickBtn');
        
        moveButtons.forEach(btn => {
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                const direction = btn.dataset.direction;
                this.keys[`Arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`] = true;
            });
            
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                const direction = btn.dataset.direction;
                this.keys[`Arrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`] = false;
            });
        });
        
        kickButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.kickBall();
        });
    }
    
    startGame() {
        this.gameState = 'playing';
        this.startTime = Date.now();
        this.hideMessage();
    }
    
    resetGame() {
        this.score = 0;
        this.goals = 0;
        this.shots = 0;
        this.gameTime = 0;
        
        // Reset positions
        this.player.x = 100;
        this.player.y = 300;
        this.ball.x = 400;
        this.ball.y = 300;
        this.ball.velocityX = 0;
        this.ball.velocityY = 0;
        
        this.updateUI();
        this.showMessage('Game Reset!', 'Try to beat your previous score!', 'Start Game');
        this.gameState = 'menu';
    }
    
    showMessage(title, text, buttonText) {
        document.getElementById('messageTitle').textContent = title;
        document.getElementById('messageText').textContent = text;
        document.getElementById('messageBtn').textContent = buttonText;
        document.getElementById('gameMessage').classList.remove('hidden');
    }
    
    hideMessage() {
        document.getElementById('gameMessage').classList.add('hidden');
    }
    
    update() {
        if (this.gameState !== 'playing') return;
        
        // Update game time
        this.gameTime = Date.now() - this.startTime;
        
        // Update player movement
        this.updatePlayer();
        
        // Update ball physics
        this.updateBall();
        
        // Check collisions
        this.checkCollisions();
        
        // Update UI
        this.updateUI();
    }
    
    updatePlayer() {
        const speed = this.player.speed;
        
        // Keyboard controls
        if (this.keys['KeyW'] || this.keys['ArrowUp']) {
            this.player.y = Math.max(0, this.player.y - speed);
        }
        if (this.keys['KeyS'] || this.keys['ArrowDown']) {
            this.player.y = Math.min(this.canvas.height - this.player.height, this.player.y + speed);
        }
        if (this.keys['KeyA'] || this.keys['ArrowLeft']) {
            this.player.x = Math.max(0, this.player.x - speed);
        }
        if (this.keys['KeyD'] || this.keys['ArrowRight']) {
            this.player.x = Math.min(this.canvas.width - this.player.width, this.player.x + speed);
        }
    }
    
    updateBall() {
        // Apply velocity
        this.ball.x += this.ball.velocityX;
        this.ball.y += this.ball.velocityY;
        
        // Apply friction
        this.ball.velocityX *= this.ball.friction;
        this.ball.velocityY *= this.ball.friction;
        
        // Boundary collisions
        if (this.ball.x <= 0 || this.ball.x >= this.canvas.width - this.ball.width) {
            this.ball.velocityX *= -0.8;
            this.ball.x = Math.max(0, Math.min(this.canvas.width - this.ball.width, this.ball.x));
        }
        
        if (this.ball.y <= 0 || this.ball.y >= this.canvas.height - this.ball.height) {
            this.ball.velocityY *= -0.8;
            this.ball.y = Math.max(0, Math.min(this.canvas.height - this.ball.height, this.ball.y));
        }
        
        // Stop very slow movement
        if (Math.abs(this.ball.velocityX) < 0.1) this.ball.velocityX = 0;
        if (Math.abs(this.ball.velocityY) < 0.1) this.ball.velocityY = 0;
    }
    
    kickBall() {
        if (this.gameState !== 'playing') return;
        
        const distance = this.getDistance(this.player, this.ball);
        
        if (distance < 50) { // Player is close enough to kick
            this.shots++;
            
            // Calculate kick direction and force
            const dx = this.ball.x - (this.player.x + this.player.width / 2);
            const dy = this.ball.y - (this.player.y + this.player.height / 2);
            const length = Math.sqrt(dx * dx + dy * dy);
            
            if (length > 0) {
                const force = 15;
                this.ball.velocityX = (dx / length) * force;
                this.ball.velocityY = (dy / length) * force;
            }
            
            // Add some randomness for realistic feel
            this.ball.velocityX += (Math.random() - 0.5) * 2;
            this.ball.velocityY += (Math.random() - 0.5) * 2;
        }
    }
    
    checkCollisions() {
        // Check goal collision
        if (this.isColliding(this.ball, this.goal)) {
            this.scoreGoal();
        }
        
        // Ball-player collision (for better interaction)
        if (this.isColliding(this.ball, this.player)) {
            const dx = this.ball.x - this.player.x;
            const dy = this.ball.y - this.player.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance > 0) {
                // Push ball away from player
                const pushForce = 2;
                this.ball.velocityX += (dx / distance) * pushForce;
                this.ball.velocityY += (dy / distance) * pushForce;
            }
        }
    }
    
    scoreGoal() {
        this.goals++;
        this.score += 100;
        
        // Reset ball position
        this.ball.x = 200 + Math.random() * 400;
        this.ball.y = 200 + Math.random() * 200;
        this.ball.velocityX = 0;
        this.ball.velocityY = 0;
        
        // Visual feedback
        this.canvas.classList.add('goal-animation');
        setTimeout(() => {
            this.canvas.classList.remove('goal-animation');
        }, 500);
        
        // Show goal message briefly
        if (this.goals % 5 === 0) {
            this.showMessage(`${this.goals} Goals!`, 'You\'re on fire! Keep going!', 'Continue');
            setTimeout(() => {
                if (this.gameState === 'playing') {
                    this.hideMessage();
                }
            }, 2000);
        }
    }
    
    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    getDistance(obj1, obj2) {
        const dx = (obj1.x + obj1.width / 2) - (obj2.x + obj2.width / 2);
        const dy = (obj1.y + obj1.height / 2) - (obj2.y + obj2.height / 2);
        return Math.sqrt(dx * dx + dy * dy);
    }
    
    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('goals').textContent = this.goals;
        document.getElementById('shots').textContent = this.shots;
        
        // Format time
        const minutes = Math.floor(this.gameTime / 60000);
        const seconds = Math.floor((this.gameTime % 60000) / 1000);
        document.getElementById('time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw field
        this.drawField();
        
        // Draw goal
        this.drawGoal();
        
        // Draw ball
        this.drawBall();
        
        // Draw player
        this.drawPlayer();
        
        // Draw kick range indicator
        if (this.gameState === 'playing') {
            this.drawKickRange();
        }
    }
    
    drawField() {
        // Field background
        this.ctx.fillStyle = '#2d8f2d';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Field lines
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.lineWidth = 3;
        
        // Center line
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvas.width / 2, 0);
        this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
        this.ctx.stroke();
        
        // Center circle
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 80, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Penalty area
        this.ctx.strokeRect(this.canvas.width - 120, this.canvas.height / 2 - 80, 120, 160);
        
        // Goal area
        this.ctx.strokeRect(this.canvas.width - 60, this.canvas.height / 2 - 40, 60, 80);
        
        // Penalty spot
        this.ctx.fillStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width - 80, this.canvas.height / 2, 4, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    drawGoal() {
        // Goal posts
        this.ctx.fillStyle = this.goal.color;
        this.ctx.fillRect(this.goal.x, this.goal.y, 10, 20); // Top post
        this.ctx.fillRect(this.goal.x, this.goal.y + this.goal.height - 20, 10, 20); // Bottom post
        this.ctx.fillRect(this.goal.x, this.goal.y, this.goal.width, 10); // Crossbar
        
        // Goal net effect
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        this.ctx.lineWidth = 1;
        for (let i = 0; i < 10; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.goal.x, this.goal.y + i * 20);
            this.ctx.lineTo(this.goal.x + 30, this.goal.y + i * 20);
            this.ctx.stroke();
        }
        for (let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.goal.x + i * 15, this.goal.y);
            this.ctx.lineTo(this.goal.x + i * 15, this.goal.y + this.goal.height);
            this.ctx.stroke();
        }
    }
    
    drawPlayer() {
        // Player shadow
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.ctx.fillRect(this.player.x + 3, this.player.y + this.player.height - 3, this.player.width, 6);
        
        // Player body
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
        
        // Player details
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(this.player.x + 5, this.player.y + 5, 20, 5); // Jersey number area
        
        // Simple face
        this.ctx.fillStyle = '#ffdbac';
        this.ctx.fillRect(this.player.x + 10, this.player.y + 2, 10, 8);
    }
    
    drawBall() {
        // Ball shadow
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x + this.ball.width / 2 + 2, this.ball.y + this.ball.height + 2, this.ball.width / 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Ball
        this.ctx.fillStyle = this.ball.color;
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x + this.ball.width / 2, this.ball.y + this.ball.height / 2, this.ball.width / 2, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Ball pattern
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(this.ball.x + this.ball.width / 2, this.ball.y + this.ball.height / 2, this.ball.width / 2 - 2, 0, Math.PI * 2);
        this.ctx.stroke();
        
        // Pentagon pattern
        this.ctx.beginPath();
        this.ctx.moveTo(this.ball.x + this.ball.width / 2, this.ball.y + 3);
        this.ctx.lineTo(this.ball.x + this.ball.width / 2 + 4, this.ball.y + 8);
        this.ctx.lineTo(this.ball.x + this.ball.width / 2 - 4, this.ball.y + 8);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    
    drawKickRange() {
        const distance = this.getDistance(this.player, this.ball);
        
        if (distance < 50) {
            // Draw kick range indicator
            this.ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
            this.ctx.lineWidth = 3;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.arc(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2, 50, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            // Draw line to ball
            this.ctx.strokeStyle = 'rgba(255, 255, 0, 0.8)';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(this.player.x + this.player.width / 2, this.player.y + this.player.height / 2);
            this.ctx.lineTo(this.ball.x + this.ball.width / 2, this.ball.y + this.ball.height / 2);
            this.ctx.stroke();
        }
    }
    
    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Check if canvas is supported
    const canvas = document.getElementById('gameCanvas');
    if (!canvas.getContext) {
        document.getElementById('gameMessage').innerHTML = `
            <div class="message-content">
                <h2>Browser Not Supported</h2>
                <p>Your browser doesn't support HTML5 Canvas. Please update your browser to play this game.</p>
            </div>
        `;
        return;
    }
    
    // Start the game
    new SoccerGame();
    
    // Console welcome message
    console.log(`
    ⚽ Soccer Game Loaded Successfully! ⚽
    ====================================
    Controls:
    - WASD or Arrow Keys: Move player
    - Spacebar: Kick ball
    - R: Restart game
    
    Have fun playing!
    `);
});