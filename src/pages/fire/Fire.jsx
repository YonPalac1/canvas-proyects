import React, { useEffect, useRef } from 'react';
import { FireClass } from './FireClass';

import './styles.css';

let w = window.innerWidth; 
let h = window.innerHeight; 
let balls = [];

let rgb = [
  [179, 162, 5],
  [227, 213, 87],
  [173, 171, 154],
  [208, 159, 108]
]

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}
const Fire = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      ctx.clearRect(0, 0, w, h);
      
      balls.push(new FireClass(w, h, getRandomInt, rgb) )
      
      

      if (balls.lenght > 14) {
        balls = balls.slice(1);
      }


      balls.forEach(ball => {
        ball.draw(ctx);
        ball.update();
        if (ball.size <= 0.3) {
          balls.splice(ball, 1);
          ball--;
        }
      })
    }
    animate();

  }, [])

  
  const resizeReset = () =>{
    w = canvas.width = window.innerWidth;
	h = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resizeReset);

  return (<main>
  <div className='container_canvas-fire'>
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

export default Fire