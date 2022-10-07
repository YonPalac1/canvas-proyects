export class ClassCircle {
    constructor(mouse, hue) {
        this.x = mouse.x - 0;
        this.y = mouse.y;
        this.style = "hsl("+ hue +", 100%, 50%)";
        this.size = 0;
    }
    draw(ctx) {
        ctx.strokeStyle = "white";
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.style;
        ctx.lineWidth = 5
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }
    update() {
        this.size += 2
        
    }
}