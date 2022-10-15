import React, { useEffect, useRef } from 'react';
import { ClassCircle } from './ClassCircle';

  let w = window.innerWidth; 
  let h = window.innerHeight; 
  let newCircle = [];
  
	let mouse = {
		x: undefined,
		y: undefined
	}
	let hue = 0

const ParticlesColor = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const animate = () => {
      requestAnimationFrame(animate);


      ctx.clearRect(0, 0, w, h);
      
      newCircle.forEach(circle => {
        circle.draw(ctx)
        circle.update()
        if (circle.size >= 250) {
          newCircle.splice(circle, 1);
          circle--;
        }
      })
      

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
  const onclick = () => {
    newCircle.push(new ClassCircle(mouse, hue))
  }

  window.addEventListener("resize", resizeReset);
  window.addEventListener("click", onclick);
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

export default ParticlesColor