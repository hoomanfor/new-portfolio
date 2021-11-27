import { Nav } from "../Nav/Nav.jsx";
import { AboutSection } from "../AboutSection/AboutSection.jsx";
import { SectionName } from "../SectionName/SectionName.jsx";

export const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <AboutSection />
        <section>
          <SectionName
            heading="Portfolio"
            description="Below are a couple projects I've enjoyed working on recently."
            targetId="#portfolio"
          />
        </section>
      </main>
    </>
  );
};
