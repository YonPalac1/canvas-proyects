export class FireClass {
    constructor(w, h, getRandomInt, rgb) {
        this.size = 5;
        this.width = getRandomInt(w, 0)
        this.height = getRandomInt(h, 150)
        this.rgb = rgb[getRandomInt(0, rgb.length - 1)];
        this.style = "rgba("+this.rgb[0]+","+this.rgb[1]+","+this.rgb[2]+",.5)";
    }
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.width, this.height, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.height -= 0.5
        this.width += 0.2
        this.size -= 0.1
    }
}