import React, { useEffect, useRef } from 'react';
import { ClassParticle } from './classParticles';

import './styles.css';

  let w = window.innerWidth; 
  let h = window.innerHeight; 
  let balls = [];
	let mouse = {
		x: undefined,
		y: undefined
	}
	let hue = 0

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}
const Particles = () => {
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, w, h);
      if (mouse.x !== undefined && mouse.y !== undefined) {
        for (let i = 0; i < 2; i++) {

          balls.push(new ClassParticle(mouse, hue, getRandomInt))
        }
      }
      
      if (balls.length > 800) {
        balls = balls.slice(1);
      }

      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw(ctx);
        for (let j = 0; j < balls.length; j++) {
          const dx = balls[i].x - balls[j].x
          const dy = balls[i].y - balls[j].y
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = balls[i].style;
            ctx.lineWidth = balls[i].size / 10;
            ctx.moveTo(balls[i].x, balls[i].y)
            ctx.lineTo(balls[j].x, balls[j].y)
            ctx.stroke();
            ctx.closePath();
          }
        }
        if (balls[i].size <= 0.3) {
          balls.splice(i, 1);
          i--;
        }
      }
      hue++;
    }
    animate();

  }, [])

  const mousemove = (e)=> {
		mouse.x = e.x;
		mouse.y = e.y;
      
      
    
	}
  
  const resizeReset = () =>{
    w = canvas.width = window.innerWidth;
		h = canvas.height = window.innerHeight;
	}
  const mouseout = () => {
    mouse.x = undefined;
    mouse.y = undefined;  
  }

  window.addEventListener("resize", resizeReset);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseout", function () {
    mouse.x = undefined;
    mouse.y = undefined
  });

  return (<main>
  <div className='container_canvas' onMouseOut={mouseout}>
    <div className='name'>
      <p>Y</p>
      <p>O</p>
      <p>N</p>
      <p>A</p>
      <p>T</p>
      <p>A</p>
      <p>N</p>
    </div>
    <canvas 
    id="canvas"
    ref={canvasRef}
    width={w}
    height={h}
   ></canvas>
  </div>
  </main>

  )
}

export default Particles