'use strict'

const chars = '.*+'
const colors = ["#ff0000", "#ff00ff", "#ffff00", "#00ffff", "#0000ff", "#00ff00"]
const isScaleUp = [true, false]

const particles = []

const maxX = innerWidth
const maxY = innerHeight

function createParticle() {
    const particle = {
        span: document.createElement('span'),
        upSpeed: 0.2 + Math.random(),
        sideSpeed: 1 + Math.random() - 1,
        x: Math.floor(Math.random() * innerWidth),
        y: Math.floor(Math.random() * innerHeight),
        maxScale: 2,
        minScale: 0.5,
        scale: Math.random() * 2,
        isScaleUp: isScaleUp[Math.floor(Math.random() * isScaleUp.length)],

        update: function() {
            /* ваш код */
            this.x += this.sideSpeed;
            this.y += this.upSpeed;
            if (this.x > maxX) this.x = 0;
            if (this.y > maxY) this.y = 0;
            if (this.x < 0) this.x = maxX;
            if (this.y < 0) this.y = maxY;

            this.span.style.left = this.x + 'px';
            this.span.style.top = this.y + 'px';
        }
    }
    particle.span.innerText = chars[Math.floor(Math.random() * chars.length)]
    particle.span.style.color = colors[Math.floor(Math.random() * colors.length)]
    particle.span.style.position = 'absolute'
    particle.span.style.fontSize = '12px'
    particle.span.style.left = particle.x + 'px'
    particle.span.style.top = particle.y + 'px'
    particle.span.style.transform = `scale(${particle.scale})`

    document.body.append(particle.span)
    particles.push(particle)
}

for(let i = 100; i > 0; i--) createParticle()

setInterval(updateParticles, 15)

function updateParticles() {
    particles.forEach( p => p.update() )
}

