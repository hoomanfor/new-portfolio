import React from "react";

import styles from "./SectionName.module.scss";

export const SectionName = ({ heading, description, targetId }) => {
  return (
    <div className={styles.sectionNameWrapper} id={targetId}>
      <h2>{heading}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
