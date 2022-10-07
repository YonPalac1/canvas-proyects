export class ClassCircles {
    constructor(mouse, rgb, getRandomInt) {
        this.x = mouse.x + getRandomInt(-20, 20);
        this.y = mouse.y + getRandomInt(-20, 20);
        this.size = getRandomInt(10, 130);
        this.rgb = rgb[getRandomInt(0, rgb.length - 1)];
        this.style = "rgba("+this.rgb[0]+","+this.rgb[1]+","+this.rgb[2]+",.5)";
    }
    draw(ctx) {
        // ctx.fillStyle = ;
        ctx.strokeStyle  = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        // ctx.fill();
        ctx.stroke();
    }
    update() {
        if (this.size > 0) {
            let s = this.size - 0.3;
            this.size = (s <= 0) ? 0 : s;
        }
    }
}