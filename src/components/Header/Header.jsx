import { useState } from "react";

import styles from "./Header.module.scss";
import logo from "../../images/hooman-logo.svg";

export const Header = () => {
  const [viewDropdown, setViewDropdown] = useState(false);

  return (
    <header>
      <div className="global-max-width">
        <nav>
          <div className={styles.logoAndMenuContainer}>
            <a target="_self" href="/portfolio">
              <img className={styles.logo} src={logo} alt="Hooman Logo" />
            </a>
            <div
              className={styles.menuButton}
              onClick={() => setViewDropdown(!viewDropdown)}
            >
              <div
                className={`${styles.bar} ${
                  viewDropdown && styles.openDropdown
                }`}
              ></div>
            </div>
          </div>
          <ul
            className={styles.linksContainer}
            style={{ display: viewDropdown && "flex" }}
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
