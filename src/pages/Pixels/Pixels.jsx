import React, { useEffect, useRef } from 'react';
import { ClassEffects } from './classEffects';

import {dataImg} from './img'

let w = window.innerWidth; 
let h = window.innerHeight; 
let mouse = {
	x: undefined,
	y: undefined
}

const Pixels = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    let image = document.getElementById('image')
    
    const effect = new ClassEffects(w, h, image)

    effect.init(ctx);

    
    const animate = () => {
      ctx.clearRect(0, 0, w, h)
      effect.draw(ctx);
      effect.update();
      requestAnimationFrame(animate);
    }
    animate();
    window.addEventListener('click', function() {
      effect.warp()
     })
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
   <img id="image" src={dataImg[0]}></img>
  </div>
    <div className='section'></div>
  </main>

  )
}

export default Pixels