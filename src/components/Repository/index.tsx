/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface repositoriesData {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  img: string;
}

export default (props: repositoriesData) => {
  const [modalIsOpen, setIsOpen] = useState('repository-menu-unactive');

  function openModal() {
    if(modalIsOpen === 'repository-menu-unactive') setIsOpen('repository-menu')
  }

  function closeModal() {
    setIsOpen('repository-menu-unactive');
  }

  return (
    <a href={props.github} target="_blanck" className={`repository ${modalIsOpen === 'repository-menu' ? 'unclickable' : 'clickable'}`} onClick={() => openModal()}>
      <img
        src={props.img}
        alt="Foto del proyecto"
        className="repository-view"
      />
      <div className="repository-info">
        <h3 className="repository-title">{props.title}</h3>
        <p className="repository-detail">{props.description}</p>
        <div className="repository-technologies-container">
          {props.technologies.map((tech) => {
            return (
              <img
                key={tech}
                src={tech}
                alt="Tech-logo"
                className="repository-technology"
              />
            );
          })}
        </div>
      </div>
    </a>
  );
};
