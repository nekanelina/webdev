import React, { useState } from "react";

function Service({ icon, title, text }) {
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <article className="service">
      <span className="service-icon" onClick={toggleText}>
        <i className={icon} />
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        {showText ? <p className="service-text">{text}</p> : ""}
      </div>
    </article>
  );
}

export default Service;
