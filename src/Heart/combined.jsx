import { useState, useEffect } from "react";
import styles from "./heartRain.module.css";

const HeartEffect = () => {
  // Define color palette for hearts
  const colours = ["#d3d3ff", "#575799", "#9d9dcc", "#DB5461", "#f39", "#f9c"];
  
  // State to control heart rain effect
  const [isRunning] = useState(true);
  
  // State to control cursor heart release frequency
  const [cursorHeartRate] = useState(90); // Adjust this value to change the density of hearts

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(createHeartRain, 100); // Adjust interval timing for heart rain frequency
    }
    return () => clearInterval(interval);
  }, );

  useEffect(() => {
    let cursorHeartInterval;
    const createHeartCursor = (e) => {
      const heart = document.createElement("div");
      heart.innerHTML = "&#10084;";
      heart.style.position = "absolute";
      heart.style.left = `${e.pageX}px`;
      heart.style.top = `${e.pageY}px`;
      heart.style.fontSize = "20px";
      heart.style.color = colours[Math.floor(Math.random() * colours.length)];
      heart.style.pointerEvents = "none";
      heart.style.opacity = "0.7";
      heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transform = "translateY(-50px) scale(1.5)";
        heart.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        document.body.removeChild(heart);
      }, 1000);
    };

    const mouseMoveHandler = (e) => {
      if (!cursorHeartInterval) {
        cursorHeartInterval = setTimeout(() => {
          createHeartCursor(e);
          cursorHeartInterval = null;
        }, cursorHeartRate); // Adjust rate of hearts appearing on cursor movement
      }
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, );

  const createHeartRain = () => {
    const heart = document.createElement("div");
    heart.innerHTML = "&#10084;";
    heart.classList.add(styles.heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    heart.style.color = colours[Math.floor(Math.random() * colours.length)];
    heart.style.position = "absolute";
    heart.style.top = "0";
    heart.style.fontSize = "30px";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 7000);
  };

  return (
    createHeartRain()
  );
};

export default HeartEffect;
