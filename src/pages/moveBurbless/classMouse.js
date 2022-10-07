export class ClassMouse {
    constructor(w, h, radius, mouse) {
      this.w = w
      this.h = h
      this.radius = radius
      this.x = mouse.x
      this.y = mouse.y
      }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = "white"
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.stroke()
        ctx.fill()
    }
    update() {
        
    }
  }