"use client"
import styles from "./page.module.css";
import { sendMail } from "../actions/sendMail";
export default async function Home() {

  async function sendForm(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const to = formData.get("email");
    const subject = `Hello ${formData.get("name")}`;
    const text = formData.get("message");
    const name = formData.get("name");
    const checkbox = formData.get("acepto");
    const req = await sendMail({ to, subject, text, name, checkbox });
  }

  return (
    <main className={styles.main}>
      <div className={styles.formCube}>
        <form onSubmit={sendForm} className={styles.form}>
          <input type="text" id="name" name="name" placeholder="Name:" className={styles.input} />

          <input type="email" id="email" name="email" placeholder="Email address:" className={styles.input} />

          <input id="message" name="message" placeholder="Tell us about your project:" className={styles.input} />

          <label className={styles.label}>
            <input type="checkbox" name="acepto" value="si"/>
              Just to try
          </label>

          <input type="submit" value="Submit" className={styles.button}/>
        </form>
      </div>
    </main>
  );
}
