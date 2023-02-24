import styles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <section className={`${styles.contact} container`}>
      <h2>Do you want to reach out the team?</h2>
      <p>We will be glad to hear you!</p>
      <form className={`${styles.form}`} action="">
        <div className={styles.element}>
          <label htmlFor="">Enter you email:</label>
          <br />
          <input type="text"/>
        </div>
        <div className={styles.element}>
          <label htmlFor="">Whats the topic?</label>
          <br />
          <select name="" id="">
            <option value="">Careers</option>
            <option value="">Partnership</option>
            <option value="">Issues in this site</option>
          </select>
        </div>
        <div className={styles.element}>
          <label htmlFor="">Write a message for the team:</label>
          <br />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className={styles.button}>Send inquiry</button>
      </form>
    </section>
  );
};

export default ContactForm;
