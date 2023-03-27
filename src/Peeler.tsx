import React from "react";
// @ts-ignore
import svgBanana from "./images/bananPeeler/banana.svg";
// @ts-ignore
import svgBananaPeeled from "./images/bananPeeler/bananaPeeled.svg";

function Peeler() {
  return (
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
      <image href={svgBanana} x="20" y="225" width="50" height="50">
        <animate />
        <animate
          attributeName="x"
          values="30;90;90;90"
          dur="5s"
          repeatCount="indefinite"
        />
      </image>

      <image href={svgBananaPeeled} x="300" y="225" width="50" height="50">
        <animate />
        <animate
          attributeName="x"
          values="205; 205; 250; 250;"
          dur="5s"
          repeatCount="indefinite"
        />
      </image>

      <line
        x1="150"
        y1="250"
        x2="200"
        y2="190"
        stroke="#404040"
        stroke-width="40"
      />
      <line
        x1="100"
        y1="250"
        x2="250"
        y2="250"
        stroke="grey"
        stroke-width="70"
      />

      <polygon points="210,180 220,180 215,170" fill="#f3da35" stroke="black">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="360 215 175"
          to="0 215 175"
          dur="3s"
          repeatCount="indefinite"
        />
      </polygon>
      <polygon points="200,170 190,170 195,160" fill="#f3da35" stroke="black">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 195 165"
          to="360 195 165"
          dur="3s"
          repeatCount="indefinite"
        />
      </polygon>
      <polygon points="213,190 223,190 218,185" fill="#f3da35" stroke="black">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 218 187"
          to="360 218 187"
          dur="3s"
          repeatCount="indefinite"
        />
      </polygon>
      <text x="130" y="255" fill="black">
        Banana Peeler
      </text>
    </svg>
  );
}
export default Peeler;
