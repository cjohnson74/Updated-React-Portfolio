import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {

  const { name, repo, link, techStack, description, role } = project;

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

        <h5>Role: {role}</h5>
        <h4>{techStack}</h4>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default Project;
