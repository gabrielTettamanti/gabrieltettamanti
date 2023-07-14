import './styles.css'
import useTime from "../hooks/useTime";
import { inject } from '@vercel/analytics';

import ukFlag from "./../../assets/images/uk.png";
import spanishFlag from "./../../assets/images/spanish.png";

function NavBar() {
  const dayTime = useTime()
  inject();
  const setLang = (lang: string) => {
    console.log(lang)
  }
    return (
      <header>
        <nav className={`nav-bar-container-${dayTime}`}>
          <div>
            <h1 className="title-nav-bar">Gabriel Tettamanti</h1>
          </div>
          <div className="lang-switch">
            <button
              className="lang-switch-button"
              onClick={() => setLang("en")}
            >
              <img
                className="lang-switch-button-flag"
                src={ukFlag}
                alt="EN"
              />
            </button>
            <button
              className="lang-switch-button button-selected"
              onClick={() => setLang("es")}
            >
              <img
                className="lang-switch-button-flag active"
                src={spanishFlag}
                alt="ES"
              />
            </button>
          </div>
        </nav>
        <div className="background-header-filling" />
      </header>
    );
};

export default NavBar;