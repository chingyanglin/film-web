import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
export default function IntroSection() {
  return (
    <div className="about ">
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2>
              Your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2>Come true.</motion.h2>
          </div>
        </motion.div>
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
