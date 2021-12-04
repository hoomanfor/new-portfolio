import styles from "./ProjectCard.module.scss";

import { Button } from "../Button/Button";

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
      <div className={styles.skill}>
        <b>{skill}</b>
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.projectName}>
          <b>{projectName}</b>
        </h3>
        <p className={styles.projectDescription}>{projectDescription}</p>
        <Button url={projectUrl} text="Visit Site" />
      </div>
    </div>
  );
};
