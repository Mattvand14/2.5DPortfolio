// CloudOverlay.jsx
import React, { useEffect, useState } from "react";
import clouds from '../../public/sprites/clouds.png';

export default function CloudOverlay({
  visited,
  fps,
  deltaX,
  deltaY,
  rows = 4,        
  cols = 3,        
}) {


  const total = rows * cols;
  const frameW = 1024 / cols;
  const frameH = 1024 / rows;

  const [frame, setFrame] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // advance the frame index at the chosen FPS
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % total);
    }, (8000 ) / fps);
    return () => clearInterval(interval);
  }, [fps, total]);

  // when visited flips true, fade out
  useEffect(() => {

    if (visited) {
      setOpacity(0);
    }
  }, [visited]);

  // compute background-position for the current frame
  const sx = -(frame % cols) * frameW + deltaX;
  const sy = -Math.floor(frame / cols) * frameH + deltaY;
  return (
    <div
      className="cloud-overlay"
      style={{
        backgroundImage: `url(${clouds})`,
        backgroundPosition: `${sx}px ${sy}px`,
        backgroundSize: `${cols * frameW}px ${rows * frameH}px`,
        opacity,
        transition: "opacity 7.5s cubic-bezier(.77,0,.18,1)",
      }}
    />
  );
}
