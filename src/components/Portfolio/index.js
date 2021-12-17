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
      description: "MongoDB/Express/React/Node/GraphQL/Apollo/JWT",
      link: "https://agile-basin-79882.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Biiggie",
    },
    {
      name: "Geo Stream",
      description: "API/JS/CSS/HTML",
      link: "https://cjohnson74.github.io/Geo-Stream/",
      repo: "https://github.com/cjohnson74/Geo-Stream",
    },
    {
      name: "Cooking Crafty",
      description: "MySQL/HandleBars/JSS/CSS/HTML",
      link: "https://cooking-crafty.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Cooking-Crafty",
    },
    {
      name: "MVC Tech Blog",
      description: "Node/MySQL/HandleBars/JS/CSS/HTML",
      link: "https://model-view-control-tech-blog.herokuapp.com/",
      repo: "https://github.com/cjohnson74/MVC-Tech-Blog",
    },
    {
      name: "Note Taker App",
      description: "Node/Express/JS/CSS/HTML",
      link: "https://note-taker-app-express-js.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Note-Taker-App",
    },
    {
      name: "CLI Team Profile Generator",
      description: "Inquirer/Jest/Node/JS/CSS/HTML",
      link: "https://cjohnson74.github.io/Team-Profile-Generator/",
      repo: "https://github.com/cjohnson74/Team-Profile-Generator",
    },
    {
      name: "Fitness Tracker",
      description: "React/MongoDB/NoSQL/Node/JS/CSS/HTML",
      link: "https://mongo-fitness-tracker-app.herokuapp.com/",
      repo: "https://github.com/cjohnson74/NoSQL-Fitness-Tracker",
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
