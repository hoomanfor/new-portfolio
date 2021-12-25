import { useState } from "react";

import styles from "./Header.module.scss";
import logo from "../../images/hooman-logo.svg";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="global-max-width">
        <nav>
          <div className={styles.logoAndHamburgerContainer}>
            <a target="_self" href="/portfolio">
              <img className={styles.logo} src={logo} alt="Hooman Logo" />
            </a>
            <div className={styles.hamburgerWrapper}>
              <button
                className={isOpen ? styles.x : ""}
                onClick={() => setOpen(!isOpen)}
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.00001 24.9853H28C31.5 24.9853 32.856 26.7733 31.5 29.4853C30 32.4853 26.5 29.9853 23.9853 27.6777L0.5 4.19234"
                    className={`${styles.line} ${styles.lineBottom}`}
                  />
                  <line
                    x1="3"
                    y1="15.8777"
                    x2="28"
                    y2="15.8777"
                    className={`${styles.line} ${styles.lineMiddle}`}
                  />
                  <path
                    d="M3.00001 7.0701H28C31.5 7.0701 32.856 5.28202 31.5 2.5701C30 -0.429912 26.5 2.07009 23.9853 4.37771L0.5 27.863"
                    className={`${styles.line} ${styles.lineTop}`}
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul
            className={styles.linksContainer}
            style={{ display: isOpen && "flex" }}
          >
            <li>
              <a target="_self" href="#about">
                About
              </a>
            </li>
            <li>
              <a target="_self" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a target="_self" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
