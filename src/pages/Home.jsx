import React, { useEffect } from "react";

import FeatureProduct from "../components/featureproduct/FeatureProduct";
import HeroSection from "../components/herosection/HeroSection";
import Services from "../components/services/Services";
import Trusted from "../components/trusted/Trusted";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection title="Junaid Khan Webiste" />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
