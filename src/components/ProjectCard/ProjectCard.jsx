import React from "react";

import styles from "./ProjectCard.module.scss";

export const ProjectCard = ({
  skill,
  projectName,
  projectDescription,
  projectUrl,
  imageUrl,
  imageBackgroundColor,
}) => {
  return (
    <div className={styles.projectCard}>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        <div
          className={styles.imageContainer}
          style={
            imageBackgroundColor && { backgroundColor: imageBackgroundColor }
          }
        >
          <img src={imageUrl} alt={projectName} />
        </div>
      </a>
      <div className={styles.contentContainer}>
        <div className={styles.skill}>
          <b>{skill}</b>
        </div>
        <h3 className={styles.projectName}>
          <b>{projectName}</b>
        </h3>
        <p className={styles.projectDescription}>{projectDescription}</p>
        <a
          className={styles.button}
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
};
