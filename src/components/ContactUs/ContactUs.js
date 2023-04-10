import React from "react";
import styles from "./ContactUs.module.css";

class ContactUs extends React.Component {
  render() {
    console.dir(styles);
    return (
      <div className={styles.container}>
        <h3 className={styles['contact-header']}>Contact Us</h3>
        <form onSubmit={this.handleSubmit}>
          <div className={styles['form-block']}>
            <input type="text" className={styles['input-field']} placeholder="Full Name"></input>
          </div>
          <div className={styles['form-block']}>
            <input type="email" className={styles['input-field']} placeholder="Email"></input>
          </div>
          <div className={styles['form-block']}>
            <textarea className={styles['textarea-field']} placeholder="Your Message" />
          </div>
          <div className={styles['submit-block']}>
            <input type="submit" value="SEND EMAIL" className={styles['submit-button']} />
          </div>
        </form>
      </div>
    )
  }
}

export default ContactUs;
