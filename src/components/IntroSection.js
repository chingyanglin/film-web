import React from "react";
import home1 from "../img/home1.png";
export default function IntroSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span>
            </h2>
          </div>
          <div className="hide">
            <h2>Come true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography and videography ideas that you have. we
          have prodfessional with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="main-img" />
      </div>
    </div>
  );
}