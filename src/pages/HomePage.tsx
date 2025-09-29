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

     
    </>
  );
};

export default HomePage;
