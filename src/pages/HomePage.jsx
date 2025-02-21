import React from "react";
import HomeSection from "../components/HomeSection";
import TrustedBySlider from "../components/TrustedBySlider";
import MissionSection from "../components/MissionSection";
import ServicesSection from "../components/ServicesSection";
import IndustryExpertise from "../components/IndustryExpertise";
import ProcessSection from "../components/ProcessSection";
import GetInTouch from "../components/GetInTouch";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HomeSection />
      <TrustedBySlider />
      <MissionSection />
      <ServicesSection />
      <IndustryExpertise />
      <ProcessSection />
      <GetInTouch />
    </>
  );
};

export default HomePage;
