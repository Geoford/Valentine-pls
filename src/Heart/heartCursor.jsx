import React, { useEffect, useState } from "react";

const HeartCursor = () => {
  const colours = ["#d3d3ff", "#575799", "#9d9dcc", "#f6f", "#f39", "#f9c"];
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = (e) => {
      const heart = document.createElement("div");
      heart.innerHTML = "&#10084;"; // Unicode for heart
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

    window.addEventListener("mousemove", createHeart);
    return () => window.removeEventListener("mousemove", createHeart);
  }, []);

  return null;
};

export default HeartCursor;
