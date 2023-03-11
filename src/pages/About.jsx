import HeroSection from "../components/herosection/HeroSection";
import {useEffect} from 'react'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const desc = "At Discountify, we pride ourselves on excellent customer service. Our team is always available to answer your questions and help you find exactly what you're looking for. We also offer fast and reliable shipping, so you can enjoy your new purchase as soon as possible. We believe in transparency and honesty, which is why we provide detailed product descriptions and photos. We want you to feel confident in your purchase and know exactly what you're getting."
  return <HeroSection desc={desc} />;
};

export default About;
