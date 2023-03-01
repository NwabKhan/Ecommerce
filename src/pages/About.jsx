import {useEffect} from 'react'
import HeroSection from '../components/herosection/HeroSection'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HeroSection title = "Haseeb Webiste" />

  )
}

export default About