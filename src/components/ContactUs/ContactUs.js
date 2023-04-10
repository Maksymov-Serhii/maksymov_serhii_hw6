import React from "react";
import styles from "./ContactUs.module.css";

class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userMessage: '',
      errors: {},
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.defaultState = this.state;
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    delete errors[name];
    this.setState({ [name]: value, errors });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { userName, userEmail, userMessage } = this.state;
    const errors = {};
    if (userName === '') {
      errors.userName = true;
    }
    if (userEmail === '') {
      errors.userEmail = true;
    }
    if (userMessage === '') {
      errors.userMessage = true;
    }

    if (Object.keys(errors).length === 0) {
      this.setState(this.defaultState);
      console.log("submit success");
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className={styles.container}>
        <h3 className={styles['contact-header']}>Contact Us</h3>
        <form onSubmit={this.handleSubmit}>
          <div className={styles['form-block']}>
            <input type="text" className={`${styles['input-field']} ${errors.userName ? styles['alert-border'] : ''}`} placeholder="Full Name" name="userName" value={this.state.userName} onChange={this.handleChange}></input>
          </div>
          <div className={styles['form-block']}>
            <input type="email" className={`${styles['input-field']} ${errors.userEmail ? styles['alert-border'] : ''}`} placeholder="Email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}></input>
          </div>
          <div className={styles['form-block']}>
            <textarea className={`${styles['textarea-field']} ${errors.userMessage ? styles['alert-border'] : ''}`} placeholder="Your Message"  name="userMessage" value={this.state.userMessage} onChange={this.handleChange} />
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
