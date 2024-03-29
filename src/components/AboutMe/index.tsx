/* eslint-disable import/no-anonymous-default-export */
import "./styles.css";

import UNLPLogo from "../../assets/images/education/unlp.webp";
import DHLogo from "../../assets/images/education/digitalhouse.webp";
import freeCodeCampLogo from "../../assets/images/education/freecodecamp.webp";
import HarvardLogo from "../../assets/images/education/harvard.webp";
import VueSchoolLogo from "../../assets/images/education/vueschool.webp";

import text from "./../../assets/data/aboutmeTexts.json";

export default () => {
  let date = new Date();
  let currentYear = date.getFullYear();
  let myCurrentAge = currentYear - 1999;

  return (
    <section className="about-me">
      <div className="education">
        <h3 className="education-title">
          {text.es.studies}
        </h3>
        <ul className="education-list">
          <li className="education-list-item">
            <h4 className="education-years">2022</h4>
            <div className="education-names">
              <div className="education-institutions">
                <p className="education-name">
                  Harvard University | CS50's Web Programming with Python and
                  JavaScript
                </p>
                <img
                  src={HarvardLogo}
                  alt="Harvard University logo"
                  className="education-logo"
                  id="harvard-university-logo"
                />
              </div>
              <div className="education-institutions">
                <p className="education-name">
                  Digital House | Full Stack Web Development
                </p>
                <img
                  src={DHLogo}
                  alt="Digital House logo"
                  className="education-logo"
                  id="dh-logo"
                />
              </div>
              <div className="education-institutions">
                <p className="education-name">
                  freeCodeCamp | Front End Development Libraries
                </p>
                <img
                  src={freeCodeCampLogo}
                  alt="freeCodeCamp logo"
                  className="education-logo"
                  id="freecodecamp-logo"
                />
              </div>
            </div>
          </li>
          <li className="education-list-item">
            <h4 className="education-years">2017 - 2020</h4>
            <div className="education-names">
              <div className="education-institutions">
                <p className="education-name">
                  Universidad Nacional de La Plata | Economics (60% completed)
                </p>
                <img
                  src={UNLPLogo}
                  alt="UNLP logo"
                  className="education-logo"
                  id="unlp-logo"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <ul className="langs-container">
        <h3 className="langs-title">
          {text.es.languages}
        </h3>
        <li className="langs-list-item">
          <p className="langs-name">
            {text.es.spanish}
          </p>
          <div className="bar front expert" data-skill="Native"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">
            {text.es.english}
          </p>
          <div className="bar front advanced" data-skill="Advanced"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">
            {text.es.german}
          </p>
          <div className="bar back basic" data-skill="Intermediate"></div>
        </li>
        <li className="langs-list-item">
          <p className="langs-name">
            {text.es.japanese}
          </p>
          <div className="bar learning" data-skill="Begginer"></div>
        </li>
      </ul>
      <div className="education">
        <h3 className="courses-title">
          {text.es.courses}
        </h3>
        <ul className="education-list">
          <li className="education-list-item">
            <h4 className="education-years">2023</h4>
            <div className="education-names">
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js + Firebase Authentication
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js + Firebase Realtime Database
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Build a Drag-and-Drop Trello Board with Vue.js
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Web Accessibility Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Storybook with Vue.js
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Nuxt.js 3 Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  GraphQL Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Pinia: The Enjoyable Vue Store
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  TypeScript Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  JavaScript Testing Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Rapid Development with Vite
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue 3 Composition API
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue 3 Single File Components
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js 3 Components Fundamentals
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js 3 Fundamentals with the Composition APIs
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Vue.js 3 Fundamentals with the Options API
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
              <div className="education-institutions course-item">
                <p className="education-name course-name">
                  Visual Studio Code for Vue.js Developers
                </p>
                <img
                  src={VueSchoolLogo}
                  alt="Vue School logo"
                  className="education-logo course-logo"
                  id="vue-school-logo"
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
