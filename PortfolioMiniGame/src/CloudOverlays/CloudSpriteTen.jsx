// CloudOverlay.jsx
import React, { useEffect, useState } from "react";
import clouds from '../public/sprites/clouds.png';

export default function CloudOverlay10({
  visited,
  rows = 4,        // number of sprite‐rows in the sheet
  cols = 3,        // number of sprite‐cols in the sheet
  fps = 10,         // how many frames per second
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
    }, 50000 / fps);
    return () => clearInterval(interval);
  }, [fps, total]);

  // when visited flips true, fade out
  useEffect(() => {

    if (visited) {
      setOpacity(0);
    }
  }, [visited]);

  // compute background-position for the current frame
  const sx = -(frame % cols) * frameW + (Math.random() * 1000);
  const sy = -Math.floor(frame / cols) * frameH + (Math.random() * 1000);

  return (
    <div
      className="cloud-overlay"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        backgroundImage: `url(${clouds})`,
        backgroundPosition: `${sx}px ${sy}px`,
        backgroundSize: `${cols * frameW}px ${rows * frameH}px`,
        opacity,
        transition: "opacity 7.5s cubic-bezier(.77,0,.18,1)",
      }}
    />
  );
}
