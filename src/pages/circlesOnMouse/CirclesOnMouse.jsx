import React, { useEffect, useRef } from 'react';
import { ClassCircles } from './classCircles';

import './styles.css';

  let w = window.innerWidth; 
  let h = window.innerHeight; 
  let balls = [];
	let mouse = {
		x: undefined,
		y: undefined
	}
	let rgb = [
		[208, 159, 108],
		[34, 193, 195],
		[253, 187, 45],
		[253, 29, 29]
	]

const Circlesonmouse = () => {
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const getRandomInt = (min, max) => {
      return Math.round(Math.random() * (max - min)) + min;
    }
    const animate = () => {
      requestAnimationFrame(animate);

      getRandomInt();
      
      ctx.clearRect(0, 0, w, h);
      if (mouse.x !== undefined && mouse.y !== undefined) {
        balls.push(new ClassCircles(mouse, rgb, getRandomInt));
      }	
      
      if (balls.length > 100) {
        balls = balls.slice(1);
      }

      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw(ctx);
      }
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
    <div className='section'></div>
  </main>

  )
}

export default Circlesonmouse