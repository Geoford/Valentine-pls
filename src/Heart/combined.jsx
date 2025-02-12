import { useState, useEffect } from "react";
import styles from "./heartRain.module.css";

const HeartEffect = () => {
  // Define array of colors for hearts in pastel and romantic shades
  // Mix of purple, pink and red tones for a valentine's theme
  const colours = ["#d3d3ff", "#575799", "#9d9dcc", "#DB5461", "#f39", "#f9c"];
  
  // State to control if heart rain animation is active
  // Default set to true to start animation immediately
  const [isRunning] = useState(true);
  
  // Control rate of heart creation when moving cursor
  // Lower value = more frequent hearts (90ms default)
  // Adjusting this value will affect how often hearts appear while moving mouse
  const [cursorHeartRate] = useState(90);

  // First useEffect: Handles the continuous heart rain animation
  useEffect(() => {
    let interval;
    if (isRunning) {
      // Create new hearts every 100ms when animation is running
      interval = setInterval(createHeartRain, 100);
    }
    // Cleanup interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, );

  // Second useEffect: Handles the cursor-following heart animation
  useEffect(() => {
    let cursorHeartInterval;

    // Function to create a single heart at cursor position
    const createHeartCursor = (e) => {
      const heart = document.createElement("div");
      heart.innerHTML = "&#10084;"; // Unicode heart symbol
      // Position heart at cursor coordinates
      heart.style.position = "absolute";
      heart.style.left = `${e.pageX}px`;
      heart.style.top = `${e.pageY}px`;
      // Style the cursor heart
      heart.style.fontSize = "20px";
      heart.style.color = colours[Math.floor(Math.random() * colours.length)];
      heart.style.pointerEvents = "none"; // Prevent heart from interfering with clicks
      heart.style.opacity = "0.7";
      heart.style.transition = "transform 1s ease-out, opacity 1s ease-out";
      document.body.appendChild(heart);

      // Animate heart floating up and fading out
      setTimeout(() => {
        heart.style.transform = "translateY(-50px) scale(1.5)";
        heart.style.opacity = "0";
      }, 10);

      // Remove heart from DOM after animation completes
      setTimeout(() => {
        document.body.removeChild(heart);
      }, 1000);
    };

    // Mouse move handler with rate limiting
    const mouseMoveHandler = (e) => {
      if (!cursorHeartInterval) {
        cursorHeartInterval = setTimeout(() => {
          createHeartCursor(e);
          cursorHeartInterval = null;
        }, cursorHeartRate);
      }
    };

    // Add and remove event listener for mouse movement
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, );

  // Function to create falling hearts for the rain effect
  const createHeartRain = () => {
    const heart = document.createElement("div");
    heart.innerHTML = "&#10084;";
    heart.classList.add(styles.heart); // Add CSS class for falling animation
    // Randomly position hearts across screen width
    heart.style.left = Math.random() * 100 + "vw";
    // Random animation duration between 3-8 seconds
    heart.style.animationDuration = Math.random() * 5 + 3 + "s";
    heart.style.color = colours[Math.floor(Math.random() * colours.length)];
    heart.style.position = "absolute";
    heart.style.top = "0";
    heart.style.fontSize = "30px";
    document.body.appendChild(heart);
    // Remove heart from DOM after animation
    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  // Component renders by triggering heart rain effect
  return (
    createHeartRain()
  );
};

export default HeartEffect;
