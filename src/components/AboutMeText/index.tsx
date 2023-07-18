import "./styles.css";

import myPhoto from "../../assets/images/me/myphoto.webp";

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
