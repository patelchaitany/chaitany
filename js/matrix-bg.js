// Matrix Rain Background Effect
class MatrixRain {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.id = 'matrix-canvas';
        this.hoveredCards = [];
        this.setupCanvas();
        this.init();
        this.setupEventListeners();
    }

    setupCanvas() {
        // Insert canvas as first child of body
        document.body.insertBefore(this.canvas, document.body.firstChild);

        // Style the canvas
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.15'; // Subtle background effect

        this.resize();
    }

    init() {
        // Matrix characters - mix of katakana, latin letters, and numbers
        this.chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charArray = this.chars.split('');

        this.fontSize = 14;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];

        // Initialize drops
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100; // Start at random heights
        }

        this.updateColors();
        this.animate();
    }

    updateColors() {
        // Get current theme
        const theme = document.documentElement.getAttribute('data-theme');

        if (theme === 'light') {
            // Light theme - darker text on light background
            this.textColor = 'rgba(0, 100, 0, 0.8)'; // Dark green
            this.bgColor = 'rgba(255, 255, 255, 0.2)'; // Very light fade
            this.neonColor = 'rgba(0, 150, 255, 1)'; // Neon blue for light mode
            this.neonGlow = 'rgba(0, 150, 255, 0.8)'; // Neon blue glow
        } else {
            // Dark theme - bright text on dark background
            this.textColor = 'rgba(0, 255, 70, 0.8)'; // Bright matrix green
            this.bgColor = 'rgba(17, 17, 17, 0.2)'; // Very dark fade
            this.neonColor = 'rgba(0, 255, 0, 1)'; // Neon green for dark mode
            this.neonGlow = 'rgba(0, 255, 0, 0.8)'; // Neon green glow
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);

        // Reinitialize drops if columns changed
        if (this.drops && this.drops.length !== this.columns) {
            const oldDrops = this.drops;
            this.drops = [];
            for (let i = 0; i < this.columns; i++) {
                this.drops[i] = oldDrops[i] !== undefined ? oldDrops[i] : Math.random() * -100;
            }
        }
    }

    isNearHoveredCard(x, y) {
        // Check if the character position is near any hovered card
        for (const rect of this.hoveredCards) {
            const expandedRect = {
                left: rect.left - 100,
                right: rect.right + 100,
                top: rect.top - 100,
                bottom: rect.bottom + 100
            };

            if (x >= expandedRect.left && x <= expandedRect.right &&
                y >= expandedRect.top && y <= expandedRect.bottom) {
                return true;
            }
        }
        return false;
    }

    animate() {
        // Semi-transparent background to create fade effect
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = `${this.fontSize}px monospace`;

        // Draw characters
        for (let i = 0; i < this.drops.length; i++) {
            // Random character
            const char = this.charArray[Math.floor(Math.random() * this.charArray.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;

            // Check if this character is near a hovered card
            const isNearHover = this.isNearHoveredCard(x, y);

            if (isNearHover) {
                // Apply neon glow effect
                this.ctx.shadowBlur = 15;
                this.ctx.shadowColor = this.neonGlow;
                this.ctx.fillStyle = this.neonColor;
            } else {
                // Normal color
                this.ctx.shadowBlur = 0;
                this.ctx.fillStyle = this.textColor;
            }

            this.ctx.fillText(char, x, y);

            // Reset drop to top randomly
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }

            // Move drop down
            this.drops[i]++;
        }

        requestAnimationFrame(() => this.animate());
    }

    updateHoveredCards() {
        // Find all currently hovered item-card elements
        const cards = document.querySelectorAll('.item-card:hover');
        this.hoveredCards = Array.from(cards).map(card => card.getBoundingClientRect());
    }

    setupEventListeners() {
        // Handle window resize
        window.addEventListener('resize', () => this.resize());

        // Track mouse movement to update hovered cards
        document.addEventListener('mousemove', () => {
            this.updateHoveredCards();
        });

        // Also update on scroll
        document.addEventListener('scroll', () => {
            this.updateHoveredCards();
        });

        // Handle theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.updateColors();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new MatrixRain());
} else {
    new MatrixRain();
}
