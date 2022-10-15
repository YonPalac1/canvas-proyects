export class ClassParticle {
    constructor(mouse, hue, getRandomInt) {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 3 + 1;
        // this.rgb = rgb[getRandomInt(0, rgb.length - 1)];
        this.style = "hsl("+ hue +", 100%, 50%)";
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) this.size -= 0.03
    }
}