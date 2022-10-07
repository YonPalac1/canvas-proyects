export class Circle {
    constructor(w, h, mouse, colorArray) {
      this.w = w
      this.h = h
      this.radius = Math.random() * 3 + 1
      this.maxradius = 60
      this.minradius = 0.7
      this.x = Math.random() * (this.w - this.radius * 2) + this.radius
      this.y = Math.random() * (this.h - this.radius * 2) + this.radius
      this.dx = (Math.random() - 0.5) * 8
      this.dy = (Math.random() - 0.5) * 8
      this.mouse = mouse
      this.colorArray = colorArray[Math.floor(Math.random() * colorArray.length)]
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.colorArray
        ctx.stroke()
        ctx.fill()
    }
    update() {
        if (this.x + this.radius > this.w || this.x - this.radius < 0) {
            this.dx = -this.dx
          }
          if (this.y + this.radius > this.h || this.y - this.radius < 0) {
            this.dy = -this.dy
          }
          this.x += this.dx
          this.y += this.dy
          
          if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && 
            this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50) {
            if (this.radius < this.maxradius) {
                this.radius += 1
            }
          } else if (this.radius > this.minradius) {
            this.radius -= 0.2;
          }
    }
  }