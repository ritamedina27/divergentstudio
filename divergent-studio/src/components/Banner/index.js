import React from "react";
import "./styles.css";

const Banner = (props) => {
  return (
    <div>
      <div className="header">
        <button>Let's Talk 👋</button>
      </div>
      <div className="banner-container">
        <h1>
          <strong>Go divergent</strong> - for the ones looking to combine
          beautiful and honest design with interactive and professional coding.
        </h1>
      </div>
    </div>
  );
};

export default Banner;
