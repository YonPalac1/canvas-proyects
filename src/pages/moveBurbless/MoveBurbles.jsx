import React, { useEffect, useRef } from 'react';
import { Circle } from './classBurbles';
import { ClassMouse } from './classMouse';

let w = window.innerWidth; 
let h = window.innerHeight; 

const mouse = {
  x: undefined,
	y: undefined
}
  
const colorArray = ['#F5FF24', '#24FFA2', '#248BFF', '#8424FF']
let circles = []
let mouseCircle = 50

const MoveBurbles = () => {
  
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    for (let i = 0; i < 400; i++) {
      circles.push(new Circle(w, h, mouse, colorArray, mouseCircle));
    }
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, w, h);
      
      let mouseC = new ClassMouse(w, h, mouseCircle, mouse)
      
      circles.forEach(circle => {
        circle.draw(ctx)
        circle.update()
      })
      
    }
    animate();
  }, [])

  

  const mousemove = (e)=> {
		mouse.x = e.x;
		mouse.y = e.y;
	}
  
  const resizeReset = () =>{
    w = window.innerWidth;
		h = window.innerHeight;
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
  </main>

  )
}

export default MoveBurbles