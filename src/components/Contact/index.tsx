/* eslint-disable react/jsx-no-target-blank */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const URL_CV_ES = "https://drive.google.com/file/d/1uSBbpskdNQ5OAOfc6jy-LIfbZSZvLQ61/view?usp=sharing";

  return (
    <footer>
      <div className="contact-container">
        <div className="contact-buttons"></div>
        <address className="contact-buttons">
          <a href={URL_CV_ES} target="_blank">
            <p className="contact-button cv-p">Curriculum Vitae</p>
          </a>
          <a
            href="https://www.linkedin.com/in/gabrieltettamanti/"
            target="_blank"
          >
            <i className="contact-button contact-icon fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:gabrieltettamanti.dev@gmail.com" className="mail-button">
            <i className="contact-button contact-icon fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/gabrielTettamanti" target="_blank">
            <i className="contact-button contact-icon fa-brands fa-github"></i>
          </a>
        </address>
      </div>
      <div className="background-footer-filling" />
    </footer>
  );
}

export default Contact;
