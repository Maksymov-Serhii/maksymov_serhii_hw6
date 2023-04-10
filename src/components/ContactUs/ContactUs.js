import React from "react";
import styles from "./ContactUs.module.css";

class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
      userMessage: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.defaultState = this.state;
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(this.defaultState);
    console.log("submit success");
  }

  render() {
    return (
      <div className={styles.container}>
        <h3 className={styles['contact-header']}>Contact Us</h3>
        <form onSubmit={this.handleSubmit}>
          <div className={styles['form-block']}>
            <input type="text" className={styles['input-field']} placeholder="Full Name" name="userName" value={this.state.userName} onChange={this.handleChange} required></input>
          </div>
          <div className={styles['form-block']}>
            <input type="email" className={styles['input-field']} placeholder="Email" name="userEmail" value={this.state.userEmail} onChange={this.handleChange}></input>
          </div>
          <div className={styles['form-block']}>
            <textarea className={styles['textarea-field']} placeholder="Your Message"  name="userMessage" value={this.state.userMessage} onChange={this.handleChange} required />
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
