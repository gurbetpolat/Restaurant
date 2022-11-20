

import Footer from "./components/Footer";
import Header from "./components/Header";
import pages from "./data/navData";
import Home from "./Home";
import { box, homeTextİmg } from "./data/homeData";
import About from "./About";
import aboutTextImage from "./data/aboutData";
import Menu from "./Menu";
import { buttons, buttonSections } from "./data/menuData";
import Jobs from "./Jobs";
import { jobsSections } from "./data/jobsData";
import { footerBottom, footerSections, footerİmage } from "./data/footerData";
import bookTable from "./components/bookTable";
import Headermenu from "./components/Headermenu";
// import useWindowSize from "./hooks/useWindowSize";
import { useEffect, useState } from "react";
import { useWindowSize } from '@react-hook/window-size'






function App() {
  // const { width } = useWindowSize();
  const [width, height] = useWindowSize()

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div className="App" style={{ position: 'relative' }}>


      {width <= 768 ? (
        <Headermenu pages={pages}
         />
      ) : (
        <Header pages={pages} />
      )}
      <Home homeTextİmg={homeTextİmg} box={box} />
      <About aboutTextImage={aboutTextImage} />
      <Menu buttons={buttons} buttonSections={buttonSections} />
      <Jobs jobsSections={jobsSections} />

      <Footer footerBottom={footerBottom} footerSections={footerSections} footerİmage={footerİmage} />

    </div>
  );
}

export default App;
