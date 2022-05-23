import React from "react";
import "./slider.css";
import Icon from "../Icon";

export default function index(props) {
  const data = props.data ?? [];
  return (
    <div className="slider">
      <Icon
        id="left-arrow"
        className="arrow"
        icon="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        onClick={() => handleSlider("left")}
      />
      <Icon
        id="right-arrow"
        className="arrow"
        icon="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        onClick={() => handleSlider("right")}
      />
      {data.map((item, index) => (
        <img
          key={index}
          src={item.image}
          className="slider-img"
          id={`img${index}`}
          alt={`slider${index}`}
        />
      ))}
    </div>
  );
}

const handleSlider = (direction) => {
  const img0 = document.getElementById("img0");
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const img4 = document.getElementById("img4");
  const images = [img0, img1, img2, img3, img4];

  if (direction === "right") {
    images.forEach((img) => {
      const index = img.id[3];
      if (parseInt(index) === 4) {
        return (img.id = "img0");
      }
      img.id = "img" + (parseInt(index) + 1);
    });
  } else {
    images.forEach((img) => {
      const index = img.id[3];
      if (parseInt(index) === 0) {
        return (img.id = "img4");
      }
      img.id = "img" + (parseInt(index) - 1);
    });
  }
};
