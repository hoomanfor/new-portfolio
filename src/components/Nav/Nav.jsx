import React from "react";

import styles from "./Nav.module.scss";
import logo from "../../images/hooman-logo.svg";

export const Nav = () => {
  return (
    <nav>
      <div className="global-max-width">
        <a target="_self" href="/">
          <img className={styles.logo} src={logo} alt="Hooman Logo" />
        </a>
        <ul className={styles.linksContainer}>
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
      </div>
    </nav>
  );
};
