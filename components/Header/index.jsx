import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.bigtitle}>
          hi, i'm <span>milena milicio</span>!
        </h1>
        <p className={styles.leadtext}>
          <span>picross</span> player, and passionate <span>front-end</span>{" "}
          developer.
        </p>
      </div>
      <div className={styles.col}>
        <img className={styles.avatar} src="/mii.jpg" alt="my avatar" />
      </div>
    </div>
  </header>
);
