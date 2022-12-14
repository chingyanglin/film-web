import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
export default function Contact() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Contact us </h1>
    </motion.div>
  );
}
