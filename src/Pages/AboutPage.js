import React from "react";
// Page Components
import IntroSection from "../components/IntroSection";
import Services from "../components/Services";
import Faq from "../components/Faq";
export default function AboutPage() {
  return (
    <div>
      <IntroSection />
      <Services />
      <Faq />
    </div>
  );
}
