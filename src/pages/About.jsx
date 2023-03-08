import HeroSection from "../components/herosection/HeroSection";
import {useEffect} from 'react'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <HeroSection title="Haseeb Webiste" />;
};

export default About;
