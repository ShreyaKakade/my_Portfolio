// app/components/ProjectCard.jsx
"use client";
import React from "react";
import "./ProjectCard.css"; // import CSS you pasted

export default function ProjectCard({ icon, title, description }) {
  return (
    <section className="card">
      <div className="card__icon">{icon}</div>
      <div className="card__content">
        <p className="card__title">{title}</p>
        <p className="card__description">{description}</p>
      </div>
    </section>
  );
}
