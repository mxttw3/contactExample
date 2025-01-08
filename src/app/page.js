import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.formCube}>
        <form action="https://formspree.io/f/xldeoywl" method="POST" className={styles.form}>
          <input type="text" id="name" name="name" placeholder="Name:" className={styles.input} />

          <input type="email" id="email" name="email" placeholder="Email address:" className={styles.input} />

          <input id="message" name="message" placeholder="Tell us about your project:" className={styles.input} />

          <label className={styles.label}>
            <input type="checkbox" name="acepto" value="si"/>
              Just to try 
          </label>

          <input type="submit" value="Submit" className={styles.button} />
        </form>
      </div>
    </main>
  );
}
