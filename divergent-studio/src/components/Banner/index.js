import React from "react";
import "./styles.css";
import whatsappIcon from "../../assets/whatsapp.png";
import designCodingIcon from "../../assets/codingdesignIcon.png";
import locationIcon from "../../assets/location.png";

const Banner = (props) => {
  return (
    <>
      <div className="icon">
        <img src={designCodingIcon} alt="designCodingIcon" width={40} />
      </div>
      <button className="contact">
        <h3>Let's Talk</h3>
        <img src={whatsappIcon} alt="whatsappIcon" width={27} />
      </button>
      <div className="background-banner">
        <div className="text">
          <h1>
            <strong>Go divergent</strong> - for the ones looking to combine
            beautiful and honest design with interactive and professional
            coding.
          </h1>
          <div className="location">
            <img src={locationIcon} alt="locationIcon" width={14} />
            <p>{"  from Península Ibérica, Lisbon & Barcelona"}</p>
          </div>
          <div className="exploreButton">
            <button className="explore"></button>
            <div className="textExplore">
              <h3>Explore</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
