import React from "react";
import home1 from "../img/home1.png";
import Wave from "./Wavs";
import { motion } from "framer-motion";
import { photoAnima, fade, titleAnimation } from "../animations";
export default function IntroSection() {
  return (
    <div className="about ">
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              Your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>Come true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography and videography ideas that you have. we
          have prodfessional with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </div>
      <div className="image">
        <motion.img src={home1} alt="main-img" variants={photoAnima} />
      </div>
      <Wave />
    </div>
  );
}
