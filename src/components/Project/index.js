import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, techStack, description } = project;

  return (
    <div data-aos="fade-up" className="project" key={name}>
      <img
        src={require(`../../assets/projects/${name}.jpg`)}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h3>
        <p>{techStack}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
