import React from "react";

export default function icon({ id, className, onClick, icon, color }) {
  return (
    <svg
      className={`h-6 w-6 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color ?? "currentColor"}
      strokeWidth={2}
      id={id}
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
}
