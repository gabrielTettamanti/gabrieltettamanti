import "./styles.css";

import UNLPLogo from "../../assets/images/education/unlp.webp";
import DHLogo from "../../assets/images/education/digitalhouse.svg";
import freeCodeCampLogo from "../../assets/images/education/freecodecamp.jpg";
import HarvardLogo from "../../assets/images/education/harvard.png";
import VueSchoolLogo from "../../assets/images/education/vueschool.svg";
import myPhoto from "../../assets/images/me/myphoto.jpg";

import text from "../../assets/data/aboutmeTexts.json";

export default () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  let myCurrentAge = currentYear - 1999;

  return (
    <section className="about-me">
      <div className="personal-description">
        <img
          src={myPhoto}
          alt=""
          className="about-me-photo"
        />
        <div>
          <h2 className="about-me-title">Full-Stack Developer</h2>
          <p className="about-me-text">
            {text.es.aboutmeTextFirstPart +
                myCurrentAge +
                text.es.aboutmeTextSecondPart}
          </p>
        </div>
      </div>
    </section>
  );
};
