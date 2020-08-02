import styles from "./Section.module.css";

export const Section = ({ title, children }) => (
  <section className={styles.section}>
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </div>
  </section>
);
