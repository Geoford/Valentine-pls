import { useState, useEffect } from "react";
import styles from "./heartRain.module.css";

const HeartRain = () => {
  const [isRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(createHeart, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const createHeart = () => {
    const heart = document.createElement("img");
    heart.src = "https://pngimg.com/uploads/heart/heart_PNG51335.png";
    heart.classList.add(styles.heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 7000);
  };

  return ( createHeart()
  );
};

export default HeartRain;
