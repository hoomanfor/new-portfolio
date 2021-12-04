import { useRef, useState } from "react";

import styles from "./ContactSection.module.scss";
import { SectionName } from "../SectionName/SectionName.jsx";

export const ContactSection = () => {
  const myEmailAddress = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    const copiedEmailAddress = myEmailAddress.current.innerText;
    navigator.clipboard.writeText(copiedEmailAddress);
    setIsCopied(true);
  };

  return (
    <section>
      <SectionName heading="Contact" targetId="#contact" />
      <div className="global-max-width">
        <div className={styles.contactInfoContainer}>
          <h3>Email me</h3>
          <div className={styles.emailContainer} onClick={copyToClipboard}>
            <code ref={myEmailAddress}>hoomanfor@gmail.com</code>
            <div className={styles.tooltip}>
              {isCopied ? "Copied!" : "Copy to clipboard"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
