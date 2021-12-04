import styles from "./Button.module.scss";

export const Button = ({ text, url }) => {
  return (
    <a
      className={styles.primary}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
