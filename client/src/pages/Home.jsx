import React, { useEffect } from "react";

import FeatureProduct from "../components/featureproduct/FeatureProduct";
import HeroSection from "../components/herosection/HeroSection";
import Services from "../components/services/Services";
import Trusted from "../components/trusted/Trusted";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const desc =
    "We offer the latest and greatest products at unbeatable prices. Our  mission is to provide our customers with the best shopping  experience possible. From fashion and beauty to electronics and  home goods, we have something for everyone. Our selection is  constantly updated, so you'll always find something new and  exciting.";
  return (
    <>
      <HeroSection desc={desc} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
