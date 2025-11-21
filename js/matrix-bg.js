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
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.15';
        this.resize();
    }

    init() {
        this.chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.charArray = this.chars.split('');
        this.fontSize = 14;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
            this.drops[i] = Math.random() * -100;
        }
        this.updateColors();
        this.animate();
    }

    updateColors() {
        const theme = document.documentElement.getAttribute('data-theme');
        // Background fade color stays the same
        this.bgColor = theme === 'light'
            ? 'rgba(255, 255, 255, 0.2)'
            : 'rgba(17, 17, 17, 0.2)';

        // Change only text colors here:
        if (theme === 'light') {
            this.textColor = 'rgba(100, 100, 100, 0.8)';      // Normal text
            this.neonColor = 'rgba(0, 120, 255, 1)';          // Hover text
            this.neonGlow = 'rgba(0, 120, 255, 0.8)';         // Hover glow
        } else {
            this.textColor = 'rgba(0, 255, 70, 0.8)';         // Normal text
            this.neonColor = 'rgba(255, 255, 255, 1)';        // Hover text
            this.neonGlow = 'rgba(0, 255, 70, 0.8)';          // Hover glow
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
        if (this.drops && this.drops.length !== this.columns) {
            const oldDrops = this.drops;
            this.drops = [];
            for (let i = 0; i < this.columns; i++) {
                this.drops[i] = oldDrops[i] !== undefined ? oldDrops[i] : Math.random() * -100;
            }
        }
    }

    isNearHoveredCard(x, y) {
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
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = `${this.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            const char = this.charArray[Math.floor(Math.random() * this.charArray.length)];
            const x = i * this.fontSize;
            const y = this.drops[i] * this.fontSize;
            const isNearHover = this.isNearHoveredCard(x, y);

            if (isNearHover) {
                this.ctx.shadowBlur = 15;
                this.ctx.shadowColor = this.neonGlow;
                this.ctx.fillStyle = this.neonColor;
            } else {
                this.ctx.shadowBlur = 0;
                this.ctx.fillStyle = this.textColor;
            }

            this.ctx.fillText(char, x, y);
            if (y > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            this.drops[i]++;
        }
        requestAnimationFrame(() => this.animate());
    }

    updateHoveredCards() {
        const cards = document.querySelectorAll('.item-card:hover');
        this.hoveredCards = Array.from(cards).map(card => card.getBoundingClientRect());
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resize());
        document.addEventListener('mousemove', () => this.updateHoveredCards());
        document.addEventListener('scroll', () => this.updateHoveredCards());

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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new MatrixRain());
} else {
    new MatrixRain();
}