import styles from "./App.module.scss";

import { Nav } from "../Nav/Nav.jsx";
import { AboutSection } from "../AboutSection/AboutSection.jsx";
import { PortfolioSection } from "../PortfolioSection/PortfolioSection";

export const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <AboutSection />
        <PortfolioSection />
      </main>
    </>
  );
};
