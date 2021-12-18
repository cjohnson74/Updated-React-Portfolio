import React, { useEffect, useState, useLayoutEffect } from "react";
import Project from "../Project";
import Aos from "aos";
import "aos/dist/aos.css";
import { CarouselWrapper } from "react-pretty-carousel";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "Biiggie",
      techStack: "MongoDB/Express/React/Node/GraphQL/Apollo/JWT",
      link: "https://agile-basin-79882.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Biiggie",
      description: "",
      role: "Full-Stack Developer",
    },
    {
      name: "Geo Stream",
      techStack: "API/JS/CSS/HTML",
      link: "https://cjohnson74.github.io/Geo-Stream/",
      repo: "https://github.com/cjohnson74/Geo-Stream",
      description: "A movie finder app that helps you find where you can watch shows/movies.",
      role: "JavaScript Developer (Fetch API)",
    },
    {
      name: "Cooking Crafty",
      techStack: "MySQL/HandleBars/JSS/CSS/HTML",
      link: "https://cooking-crafty.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Cooking-Crafty",
      description: "",
      role: "Backend Developer",
    },
    {
      name: "MVC Tech Blog",
      techStack: "Node/MySQL/HandleBars/JS/CSS/HTML",
      link: "https://model-view-control-tech-blog.herokuapp.com/",
      repo: "https://github.com/cjohnson74/MVC-Tech-Blog",
      description: "I built a CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts as well. My application’s folder structure follows the Model-View-Controller paradigm.",
      role: "Solo Developer",
    },
    {
      name: "Note Taker App",
      techStack: "Node/Express/JS/CSS/HTML",
      link: "https://note-taker-app-express-js.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Note-Taker-App",
      description: "",
      role: "Solo Developer",
    },
    {
      name: "CLI Team Profile Generator",
      techStack: "Inquirer/Jest/Node/JS/CSS/HTML",
      link: "https://cjohnson74.github.io/Team-Profile-Generator/",
      repo: "https://github.com/cjohnson74/Team-Profile-Generator",
      description: "",
      role: "Solo Developer",
    },
    {
      name: "Fitness Tracker",
      techStack: "React/MongoDB/NoSQL/Node/JS/CSS/HTML",
      link: "https://mongo-fitness-tracker-app.herokuapp.com/",
      repo: "https://github.com/cjohnson74/NoSQL-Fitness-Tracker",
      description: "",
      role: "Solo Developer",
    },
  ]);

  // Aos animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="flex-row flex-center my-5">
        <CarouselWrapper items={1} mode="gallery">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
        </CarouselWrapper>
      </div>
    </div>
  );
}

export default Portfolio;
