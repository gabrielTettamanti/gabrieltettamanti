/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./styles.css";

import Repository from "../Repository";

import repositoriesData from '../../assets/data/repositoriesData'
import text from "./../../assets/data/indexTexts.json";

export default () => {
  return (
    <section className="repositories-list">
      <h2 className="repositories-list-title" id="experiments-title">
        {text.es.repositoriesListTitle}
        <span>
          {text.es.experimentsSubtitle}
        </span>
      </h2>
      {repositoriesData.map((data) => {
        return (
          <Repository
            title={data.title}
            description={data.description}
            technologies={data.technologies}
            github={data.github}
            img={data.img}
            key={data.title}
          />
        );
      })}
    </section>
  );
};
