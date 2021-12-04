// import styles from "./App.module.scss";

import { Nav } from "../Nav/Nav.jsx";
import { AboutSection } from "../AboutSection/AboutSection.jsx";
import { PortfolioSection } from "../PortfolioSection/PortfolioSection";
import { ContactSection } from "../ContactSection/ContactSection";
import { Footer } from "../Footer/Footer.jsx";

export const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
