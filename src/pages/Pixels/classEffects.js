import { ClassPixels } from "./classPixels"

export class ClassEffects {
    constructor(width, height, image) {
        this.width = width
        this.height = height
        this.particlesArray = []
        this.image = image
        this.centerX = this.width * 0.35
        this.centerY = this.height * 0.2
        this.x = this.centerX - this.image.width * 0.2
        this.y = this.centerY - this.image.height * 0.2
        this.gap = 3
        this.mouse = {
            radius: 1500,
            x: undefined,
            y: undefined
        }
        window.addEventListener("mousemove", event => {
            this.mouse.x = event.x
            this.mouse.y = event.y
        })
    }
    init(ctx) {
        ctx.drawImage(this.image, this.x, this.y)
        const pixels = ctx.getImageData(0, 0, this.width, this.height).data;
        for (let y = 0; y < this.height; y += this.gap) {
            for (let x  = 0; x < this.width; x += this.gap) {
                const index = (y * this.width + x) * 4
                const red = pixels[index]
                const green = pixels[index + 1]
                const blue = pixels[index + 2]
                const alpha = pixels[index + 3]
                const color = 'rgb('+ red + ',' + green + ',' + blue + ')'
                
                if (alpha > 0) {
                    this.particlesArray.push(new ClassPixels(this, x, y, color))
                }
            }
        }
    }
    draw(ctx) {
        this.particlesArray.forEach(particle => particle.draw(ctx))
    }
    update() {
        this.particlesArray.forEach(particle => particle.update())
    }
    warp() {
        this.particlesArray.forEach(particle => particle.warp())
  
    }
  }