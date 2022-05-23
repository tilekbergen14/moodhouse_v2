import React from "react";
import "./card.css";

export default function index({ item }) {
  return (
    <a href="" className="cu-card">
      <div className="cu-card-header">
        <div className="card-relative">
          <img src={item.image} alt="" />
          <div className="card-infos">
            <div className="info-box info-box-left">БӨЛІМ 1</div>
            <div className="info-box info-box-right">QAZ</div>
          </div>
        </div>
      </div>
      <div className="card-hero">
        <p className="card-title mt-1">Елес аулаушылар</p>
      </div>
    </a>
  );
}
