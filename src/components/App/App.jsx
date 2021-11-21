import { Nav } from "../Nav/Nav.jsx";
import { AboutSection } from "../AboutSection/AboutSection.jsx";

export const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <AboutSection />
      </main>
    </>
  );
};
