import styles from "./AboutSection.module.scss";
import headshot from "../../images/avatar_placeholder.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="#about" className="global-max-width">
      <div className={styles.aboutSectionWrapper}>
        <div>
          <h1>
            Hello,
            <br />
            I’m Hooman
          </h1>
          <p>
            I’m a web developer living in the Research Triangle of Durham, NC. I
            build web solutions using data-driven decision-making. I solve
            problems using the scientific method.
          </p>
          <div className={styles.iconsContainer}>
            <a target="_blank" href="https://www.linkedin.com/in/hoomanfor/">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/hoomanfor">
              <FaGithub />
            </a>
          </div>
        </div>
        <div>
          <img src={headshot} alt="Hooman's Headshot" />
        </div>
      </div>
    </section>
  );
};
