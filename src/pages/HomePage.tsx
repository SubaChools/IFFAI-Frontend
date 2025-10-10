// pages/HomePage.tsx
import Hero from "../components/Hero";
import Sectiontwo from "../components/HomeSessiontwo";
// import Sectionthree from "../components/HomeSessionthree";
// import Sectionfour from "../components/HomeSessionfour";
import Sectionfive from "../components/HomeSessionfive";
import Sectionsix from "../components/HomeSessionsix";
import PartnersLogo from "../components/partnersLogo";
import Sectioneight from "../components/HomeSessioneight";
import CoreArea from "../components/CoreArea";
import RegNow from "../components/RegNow";
import Testimonials from "../components/Testimonials ";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <>
      <Hero />
      <Sectiontwo />
      
      {/* <Sectionthree /> */}
      {/* <Sectionfour /> */}
      
      <CoreArea />
      <Sectionfive />
       <Sectioneight />
       <PartnersLogo />
      <Sectionsix />
      <RegNow />
      <Testimonials />
      <Footer />

     
    </>
  );
};

export default HomePage;
