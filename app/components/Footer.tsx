import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={`shell ${styles.inner}`}>
        <div>
          <div className={styles.name}>Bhagwandas Yadav</div>
          <div className={styles.place}>Mumbai, India · Updated September 2026</div>
        </div>
        <div className={styles.links}>
          <a href="mailto:yadavbd77@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/bhagwandas-yadav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sbdyadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/resume.pdf">Résumé</a>
        </div>
      </div>
    </footer>
  );
}
