import React from 'react';
import './styles.scss';
import whatsappIcon from 'assets/whatsapp.png';
import designCodingIcon from 'assets/codingdesignIcon.png';
import locationIcon from 'assets/location.png';
import { useMediaQuery } from 'react-responsive';
import { SCREEN_SIZES } from 'utils/screenSize';

const Banner = (props) => {
  const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.until.md });
  return (
    <>
      {!isMobile && (
        <div className="icon">
          <img src={designCodingIcon} alt="designCodingIcon" width={36} />
        </div>
      )}
      <button className="contact">
        {!isMobile && <h3 style={{ marginRight: '30px' }}>Let's Talk</h3>}
        <img src={whatsappIcon} alt="whatsappIcon" width={27} />
      </button>
      <div className="background-banner">
        <div className="text">
          <h1 className="text-title">
            <strong>GO DIVERGENT</strong> - for the ones looking to combine
            beautiful and honest design with interactive and professional
            coding.
          </h1>
          <div className="location">
            <img src={locationIcon} alt="locationIcon" width={14} />
            <p className="location-text">
              {'  from Península Ibérica, Lisbon & Barcelona'}
            </p>
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
