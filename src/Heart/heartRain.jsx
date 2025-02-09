import React, { useEffect, useState } from "react";

const HeartRain = () => {
    const container = document.querySelector(".container");
    const create = document.createElement("div");
    create.classList.add("heart");
    create.innerHTML = "&#10084;";
    container.appendChild(create);
}

setInterval(HeartRain,1000);


export default HeartRain;