import React from "react";
// Page Components
import IntroSection from "../components/IntroSection";
import Services from "../components/Services";
import Faq from "../components/Faq";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
export default function AboutPage() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <IntroSection />
      <Services />
      <Faq />
    </motion.div>
  );
}
