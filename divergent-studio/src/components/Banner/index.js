import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/whatsapp.png";

const Banner = (props) => {
  return (
    <>
      <div className="header">
        <button>
          <p>Let's Talk</p>
          <img src={whatsappIcon} alt="icone" width={27} height="27" />
        </button>
      </div>
      <div className="container">
        <h1>
          <strong>Go divergent</strong> - for the ones looking to combine
          beautiful and honest design with interactive and professional coding.
        </h1>
      </div>
    </>
  );
};

export default Banner;
