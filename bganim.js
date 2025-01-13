// following franks laboratory tutorial check it out!!

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.globalCompositeOperation='destionation-over';
ctx.fillStyle = 'black';
console.log(ctx);

// ctx.fillStyle = 'black';
// ctx.fillRect(200, 100, 50, 100);

class Particle {
    constructor(effect) {
        this.effect = effect;
        this.radius = Math.random() * 4 + 1;
        this.x = this.radius + Math.random() * (this.effect.width -
        this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height -
        this.radius * 2);
        this.velx = Math.random() * 0.5 - 0.25;
        this.vely = Math.random() * 0.5 - 0.25;
    }
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
    } 
    update() {
        this.x += this.velx;
        if (this.x > this.effect.width - this.radius || this.x < this.radius)
            this.velx *= -1;
        this.y += this.vely;
        if (this.y > this.effect.width - this.radius || this.y < this.radius)
            this.vely *= -1;
    }
}

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.particles = [];
        this.numberOfParticles = 250;
        this.createParticles();
    }
    createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
    }
    handleParticles(context) {
        this.connectParticles(context);
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        });
    }
    connectParticles(context) {
        const maxDistance = 150;
        for (let i = 0; i < this.particles.length - 1; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y; 
                const dist = Math.hypot(dx, dy);
                if (dist < maxDistance) {
                    context.save();
                    const opacity = 1 - (dist/maxDistance);
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(this.particles[i].x, this.particles[i].y);
                    context.lineTo(this.particles[j].x, this.particles[j].y);
                    context.stroke();
                    context.restore();
                }
            }
        }
    }
}

const effect = new Effect(canvas);
// console.log(effect);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}

animate();