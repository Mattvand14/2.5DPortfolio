// PinkMonsterOverlay.jsx
import React, { useState, useEffect } from "react";
import './PinkMonster.css';
import walk from '../public/sprites/Pink_Monster/Pink_Monster_Walk_6.png';
import idle from '../public/sprites/Pink_Monster/Pink_Monster_Idle_4.png';

function PinkMonsterOverlay() {
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    setIsMoving(true);
    const timer = setTimeout(() => {
      setIsMoving(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="Pink-Monster"
      style={{
        backgroundImage: `url(${isMoving ? walk : idle})`,
      }}
    />
  );
}

export default PinkMonsterOverlay;
