// Test App JavaScript - Interactive Features

// Theme Management
class ThemeManager {
    constructor() {
        this.isDark = localStorage.getItem('darkTheme') === 'true';
        this.init();
    }

    init() {
        this.applyTheme();
        this.setupToggle();
    }

    applyTheme() {
        document.body.classList.toggle('dark-theme', this.isDark);
        this.updateToggleButton();
    }

    updateToggleButton() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = this.isDark 
                ? '<i class="fas fa-sun"></i> Switch to Light Mode'
                : '<i class="fas fa-moon"></i> Switch to Dark Mode';
        }
    }

    setupToggle() {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('darkTheme', this.isDark);
        this.applyTheme();
        
        // Add a nice transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }
}

// Counter Management
class Counter {
    constructor() {
        this.value = parseInt(localStorage.getItem('counterValue')) || 0;
        this.init();
    }

    init() {
        this.updateDisplay();
    }

    updateDisplay() {
        const display = document.getElementById('counter-value');
        if (display) {
            display.textContent = this.value;
            
            // Add animation
            display.style.transform = 'scale(1.2)';
            setTimeout(() => {
                display.style.transform = 'scale(1)';
            }, 150);
        }
    }

    increment() {
        this.value++;
        this.save();
        this.updateDisplay();
    }

    decrement() {
        this.value--;
        this.save();
        this.updateDisplay();
    }

    reset() {
        this.value = 0;
        this.save();
        this.updateDisplay();
    }

    save() {
        localStorage.setItem('counterValue', this.value);
    }
}

// Calculator Management
class Calculator {
    constructor() {
        this.display = '';
        this.lastResult = 0;
        this.shouldResetDisplay = false;
        this.init();
    }

    init() {
        this.updateDisplay();
        this.setupKeyboardSupport();
    }

    updateDisplay() {
        const input = document.getElementById('calc-input');
        if (input) {
            input.value = this.display || '0';
        }
    }

    append(value) {
        if (this.shouldResetDisplay) {
            this.display = '';
            this.shouldResetDisplay = false;
        }

        // Prevent multiple decimal points
        if (value === '.' && this.display.includes('.')) {
            return;
        }

        // Prevent multiple operators
        if (['+', '-', '*', '/'].includes(value)) {
            const lastChar = this.display.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar)) {
                this.display = this.display.slice(0, -1);
            }
        }

        this.display += value;
        this.updateDisplay();
    }

    clear() {
        this.display = '';
        this.updateDisplay();
    }

    deleteLast() {
        this.display = this.display.slice(0, -1);
        this.updateDisplay();
    }

    calculate() {
        try {
            if (this.display.trim() === '') return;

            // Replace display symbols with JavaScript operators
            let expression = this.display
                .replace(/×/g, '*')
                .replace(/÷/g, '/');

            // Basic security check
            if (!/^[0-9+\-*/.() ]+$/.test(expression)) {
                throw new Error('Invalid expression');
            }

            const result = Function('"use strict"; return (' + expression + ')')();
            
            if (isNaN(result) || !isFinite(result)) {
                throw new Error('Invalid calculation');
            }

            this.display = result.toString();
            this.lastResult = result;
            this.shouldResetDisplay = true;
            this.updateDisplay();

            // Add success animation
            const input = document.getElementById('calc-input');
            if (input) {
                input.style.backgroundColor = '#d4edda';
                setTimeout(() => {
                    input.style.backgroundColor = '';
                }, 300);
            }

        } catch (error) {
            this.display = 'Error';
            this.updateDisplay();
            
            // Add error animation
            const input = document.getElementById('calc-input');
            if (input) {
                input.style.backgroundColor = '#f8d7da';
                setTimeout(() => {
                    input.style.backgroundColor = '';
                    this.clear();
                }, 1000);
            }
        }
    }

    setupKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            const calcInput = document.getElementById('calc-input');
            if (!calcInput || document.activeElement !== calcInput) return;

            e.preventDefault();

            if (e.key >= '0' && e.key <= '9' || e.key === '.') {
                this.append(e.key);
            } else if (['+', '-', '*', '/'].includes(e.key)) {
                this.append(e.key);
            } else if (e.key === 'Enter' || e.key === '=') {
                this.calculate();
            } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
                this.clear();
            } else if (e.key === 'Backspace') {
                this.deleteLast();
            }
        });
    }
}

// Color Generator
class ColorGenerator {
    constructor() {
        this.currentColor = '#3498db';
        this.init();
    }

    init() {
        this.updateDisplay();
    }

    generateRandom() {
        // Generate random hex color
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        this.currentColor = color;
        this.updateDisplay();
        
        // Add generation animation
        const preview = document.getElementById('color-preview');
        if (preview) {
            preview.style.transform = 'scale(0.8) rotate(180deg)';
            setTimeout(() => {
                preview.style.transform = 'scale(1) rotate(0deg)';
            }, 150);
        }
    }

    updateDisplay() {
        const preview = document.getElementById('color-preview');
        const hexDisplay = document.getElementById('color-hex');
        const rgbDisplay = document.getElementById('color-rgb');

        if (preview) {
            preview.style.backgroundColor = this.currentColor;
        }

        if (hexDisplay) {
            hexDisplay.textContent = this.currentColor;
        }

        if (rgbDisplay) {
            const rgb = this.hexToRgb(this.currentColor);
            rgbDisplay.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        }
    }

    hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Global instances
let themeManager, counter, calculator, colorGenerator;

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    themeManager = new ThemeManager();
    counter = new Counter();
    calculator = new Calculator();
    colorGenerator = new ColorGenerator();

    // Setup smooth scrolling for navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add some entrance animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Observe all demo widgets for animations
    const widgets = document.querySelectorAll('.demo-widget');
    widgets.forEach(widget => {
        widget.style.opacity = '0';
        widget.style.transform = 'translateY(20px)';
        widget.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(widget);
    });

    // Console welcome message
    console.log(`
    ╭─────────────────────────────────────╮
    │       Welcome to Test App!          │
    │                                     │
    │  Features:                          │
    │  • Theme switching                  │
    │  • Persistent counter               │
    │  • Functional calculator            │
    │  • Random color generator           │
    │  • Responsive design                │
    │                                     │
    │  Built with vanilla JavaScript!     │
    ╰─────────────────────────────────────╯
    `);
});

// Global functions for HTML onclick handlers
function incrementCounter() {
    counter.increment();
}

function decrementCounter() {
    counter.decrement();
}

function resetCounter() {
    counter.reset();
}

function appendToCalculator(value) {
    calculator.append(value);
}

function clearCalculator() {
    calculator.clear();
}

function deleteLast() {
    calculator.deleteLast();
}

function calculateResult() {
    calculator.calculate();
}

function generateRandomColor() {
    colorGenerator.generateRandom();
}

// Add some easter eggs
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        console.log('🎉 Konami Code activated! You found the easter egg!');
    }
});

// Add rainbow animation for easter egg
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);