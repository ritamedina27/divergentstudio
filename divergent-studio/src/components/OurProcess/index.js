import React from "react";
import "./styles.css";
import randomRedLine from "../../assets/redline.png";

const OurProcess = (props) => {
  return (
    <div className="background-OP">
      <div className="line">
        <div class="vl"></div>
      </div>
      <div className="container-OP">
        <h1>
          <strong>
            Our <p>Process</p>
          </strong>
        </h1>
        <div className="text-OP">
          <h2>
            <br />
            We are spealists in microsites and landingpages.
            <br />
            We do human-centric design, which means our focus is always the
            user.
            <br />
            We believe design and coding work better when together.
            <br />
            We do responsive, user-friendly and custom websites.
            <br />
          </h2>
          <div className="stepsProcess">
            <div className="step">
              <h1>1</h1>
              <h2>
                <strong>Research and Strategy</strong> <br />
                <hr />
                This phase it’s all about knowing your project and the users of
                your site. We use different tools, like desk research,
                questionnaries, interviews. After we start designing a strategy
                that add value to the project.{" "}
              </h2>
            </div>
            <div className="step">
              <h1>2</h1>
              <h2>
                <strong>Visual</strong> <br />
                <hr />
                We do simple and honest design, which means that is driven by a
                carefull designed strategy. Like this we make sure that is
                coherent with the nature of your project and with the needs of
                your users.{" "}
              </h2>
            </div>
            <div className="step">
              <h1>3</h1>
              <h2>
                <strong>Coding</strong> <br />
                <hr />
                The code is done side by side with the design. We make sure your
                site look good in different plataforms. We are always
                changelling our selfs to make your site more interative and
                intuitive to use as possible.
              </h2>
            </div>
          </div>
        </div>
        <div className="randomRedLine">
          <img src={randomRedLine} alt="randomRedLine" width={170} />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
