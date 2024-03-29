/* eslint-disable import/no-anonymous-default-export */

import jsLogo from "../../assets/images/tecnologies/languages/javascript.webp";
import tsLogo from "../../assets/images/tecnologies/languages/typescript.webp";
import pyLogo from "../../assets/images/tecnologies/languages/python.webp";
import cssLogo from "../../assets/images/tecnologies/languages/css.webp";
import htmlLogo from "../../assets/images/tecnologies/languages/html.webp";
import nextLogo from "../../assets/images/tecnologies/frontend/next.webp";
import reactLogo from "../../assets/images/tecnologies/frontend/react.webp";
import astroLogo from "../../assets/images/tecnologies/frontend/astro.webp";
import expressLogo from "../../assets/images/tecnologies/backend/express.webp";
import djangoLogo from "../../assets/images/tecnologies/backend/django.webp";
import MySQLLogo from "../../assets/images/tecnologies/database/mysql.webp";
import MongoDBLogo from "../../assets/images/tecnologies/database/mongodb.webp";
import graphQLLogo from "../../assets/images/tecnologies/database/graphql.webp";
import JestLogo from "../../assets/images/tecnologies/testing/jest.webp";
import TailwindLogo from "../../assets/images/tecnologies/styles/tailwind.webp";
import GitLogo from "../../assets/images/tecnologies/tools/git.webp";
import DockerLogo from "../../assets/images/tecnologies/tools/docker.webp";
import ViteLogo from "../../assets/images/tecnologies/tools/vite.webp";
import SassLogo from "../../assets/images/tecnologies/tools/sass.webp";

import "./styles.css";

import text from "./../../assets/data/techTexts.json";

export default function () {

  return (
    <div className="technologies-container">
      <section className="technologies">
        <h2 className="tech-section-title">{text.es.currentStackTitle}</h2>
        <div className="tech-group">
          <div className="logos-group">
            <a
              href="https://www.javascript.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={jsLogo} alt="Javascript" className="technology-logo" />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={tsLogo} alt="TypeScript" className="technology-logo" />
            </a>
            <a
              href="https://www.python.org/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={pyLogo} alt="Python" className="technology-logo" />
            </a>
            <a
              href="https://html.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={htmlLogo} alt="HTML" className="technology-logo" />
            </a>
            <a
              href="https://www.w3.org/Style/CSS/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cssLogo} alt="CSS" className="technology-logo" />
            </a>
            <a
              href="https://sass-lang.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={SassLogo} alt="Sass" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <div className="logos-group">
            <a
              href="https://nextjs.org/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={nextLogo} alt="Next" className="technology-logo" />
            </a>
            <a
              href="https://es.reactjs.org/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={reactLogo} alt="React" className="technology-logo" />
            </a>
            <a
              href="https://astro.build/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={astroLogo} alt="Astro" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <div className="logos-group">
            <a
              href="https://expressjs.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={expressLogo}
                alt="Express"
                className="technology-logo"
              />
            </a>
            <a
              href="https://www.djangoproject.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={djangoLogo} alt="DJango" className="technology-logo" />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <div className="logos-group">
            <a
              href="https://www.mysql.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={MySQLLogo} alt="MySQL" className="technology-logo" />
            </a>
            <a
              href="https://www.mongodb.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={MongoDBLogo}
                alt="MongoDB"
                className="technology-logo"
              />
            </a>
            <a
              href="https://graphql.org/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={graphQLLogo}
                alt="GraphQL"
                className="technology-logo"
              />
            </a>
          </div>
        </div>
        <div className="tech-group">
          <div className="logos-group">
            <a
              href="https://jestjs.io/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={JestLogo} alt="Jest" className="technology-logo" />
            </a>
            <a
              href="https://tailwindcss.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TailwindLogo}
                alt="Tailwind"
                className="technology-logo"
              />
            </a>
            <a
              href="https://vitejs.dev/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ViteLogo} alt="Vite" className="technology-logo" />
            </a>
            <a
              href="https://git-scm.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitLogo} alt="Git" className="technology-logo" />
            </a>
            <a
              href="https://www.docker.com/"
              className="tech-link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={DockerLogo} alt="Docker" className="technology-logo" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
