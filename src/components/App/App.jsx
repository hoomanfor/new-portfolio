// import styles from "./App.module.scss";

import { Header } from "../Header/Header.jsx";
import { AboutSection } from "../AboutSection/AboutSection.jsx";
import { PortfolioSection } from "../PortfolioSection/PortfolioSection";
import { ContactSection } from "../ContactSection/ContactSection";
import { Footer } from "../Footer/Footer.jsx";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
