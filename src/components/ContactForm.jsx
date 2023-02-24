import { useState } from "react";
import { send } from "emailjs-com";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formContact, setFormContact] = useState({
    fromEmail: "",
    department: "careers",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormContact((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    send(
      "service_wqoab4a",
      "template_onwsuk6",
      formContact,
      "BPmyVw0Oabp2X1Bjw"
    )
      .then((response) => {
        alert(`SUCCESS! We will get back to you as soon as possible.`);
      })
      .catch((err) => {
        alert(`ERROR ${err.status}: ${err.text}`);
      });
    setFormContact((prevForm) => {
      return {
        fromEmail: "",
        department: "careers",
        message: "",
      };
    });
  }

  return (
    <section className={`${styles.contact} container`}>
      <h2>Do you want to reach out the team?</h2>
      <p>We will be glad to hear you!</p>
      <form onSubmit={handleSubmit} className={`${styles.form}`} action="">
        <div className={styles.element}>
          <label htmlFor="fromEmail">Enter you email:</label>
          <br />
          <input
            name="fromEmail"
            id="fromEmail"
            onChange={handleChange}
            type="email"
            value={formContact.fromEmail}
          />
        </div>
        <div className={styles.element}>
          <label htmlFor="department">Whats the topic?</label>
          <br />
          <select
            name="department"
            id="department"
            onChange={handleChange}
            value={formContact.department}
          >
            <option value="careers">Careers</option>
            <option value="partnership">Partnership</option>
            <option value="support">Issues in this site</option>
          </select>
        </div>
        <div className={styles.element}>
          <label htmlFor="message">Write a message for the team:</label>
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={formContact.message}
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Send inquiry
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
