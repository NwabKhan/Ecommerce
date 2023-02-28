import React from "react";
import FeatureProduct from "../components/featureproduct/FeatureProduct";
import HeroSection from "../components/herosection/HeroSection";
import Services from '../components/services/Services'
import Trusted from '../components/trusted/Trusted'
const Home = () => {
  return (
    <>
      <HeroSection title="Junaid Webiste" />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );  
};

export default Home;
