import styles from "./AboutSection.module.scss";
import headshot from "../../images/me.png";
import resume from "../../resume/hooman-web-dev-resume.pdf";
import { Button } from "../Button/Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="#about" className="global-max-width">
      <div className={styles.aboutSectionWrapper}>
        <div className={styles.introductionSection}>
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hoomanfor/"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/hoomanfor"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.headshotSection}>
          <img src={headshot} alt="Hooman's Headshot" />
          <Button url={resume} text="View Resume" />
        </div>
      </div>
    </section>
  );
};
