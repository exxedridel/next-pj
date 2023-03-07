import { useContext, useEffect, useState } from "react";
import AppContext from "@/context/AppContext";
import { send } from "emailjs-com";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { t, setAboutActive } = useContext(AppContext);
  const [departmentRoute, setDepartmentRoute] = useState("");
  const [formContact, setFormContact] = useState({
    fromEmail: "",
    department: "",
    message: "",
    replyTo: "",
  });

  const departmentEmail = {
    careers: "hevedrios@gmail.com",
    partnership: "exxed.ridel@gmail.com",
    support: "hord.27591@gmail.com",
  };

  useEffect(() => {
    setDepartmentRoute(departmentEmail[formContact.department]);
  }, [formContact]);

  useEffect(() => {
    setFormContact((prevForm) => {
      return {
        ...prevForm,
        replyTo: departmentRoute,
      };
    });
  }, [departmentRoute]);

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

    console.log(formContact);

    setFormContact({
      fromEmail: "",
      department: "",
      message: "",
      replyTo: "",
    });
  }

  return (
    <section className={`${styles.contact} container`}>
      <h2>{t.about.contactForm.title}</h2>
      <p>{t.about.contactForm.description}</p>
      <form onSubmit={handleSubmit} className={`${styles.form}`} action="">
        <div className={styles.element}>
          <label htmlFor="fromEmail">{t.about.contactForm.email}</label>
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
          <label htmlFor="department">{t.about.contactForm.topics.title}</label>
          <br />
          <select
            name="department"
            id="department"
            onChange={handleChange}
            value={formContact.department}
          >
            <option value="careers">{t.about.contactForm.topics.careers}</option>
            <option value="partnership">{t.about.contactForm.topics.partnership}</option>
            <option value="support">{t.about.contactForm.topics.issues}</option>
          </select>
        </div>
        <div className={styles.element}>
          <label htmlFor="message">{t.about.contactForm.message}</label>
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
        {t.about.contactForm.inquiryBtn}
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
