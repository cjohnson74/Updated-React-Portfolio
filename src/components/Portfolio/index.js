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
      description: "Here comes Biiggie, a MERN application, where you can find talented individuals to make your dreams become reality. Network with others to support your interest and donate your time and talents.",
      role: "Full-Stack Developer",
    },
    {
      name: "Geo Stream",
      techStack: "API/JS/CSS/HTML",
      link: "https://cjohnson74.github.io/Geo-Stream/",
      repo: "https://github.com/cjohnson74/Geo-Stream",
      description: "A movie finder app that helps you find where you can watch shows/movies. I used JavaScript to pull from multiple WebAPIs",
      role: "JavaScript Developer (Fetch API)",
    },
    {
      name: "Cooking Crafty",
      techStack: "MySQL/HandleBars/JSS/CSS/HTML",
      link: "https://cooking-crafty.herokuapp.com/",
      repo: "https://github.com/cjohnson74/Cooking-Crafty",
      description: "An application that recommends recipes based on what ingredients you have on your fridge. Cooking Crafty is an application that recommends recipes based on what ingredients you have on your fridge. I was in charge of designing, creating, and organizing the back-end of Cooking Crafty. I collected a large amount of data, created seeders, and organized the data using Object-Relational mapping.",
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
      description: "An application that can be used to write and save notes. This application uses an Express.js back end and saves and retrieves note data from a JSON file.",
      role: "Solo Developer",
    },
    {
      name: "CLI Team Profile Generator",
      techStack: "Inquirer/Jest/Node/JS/CSS/HTML",
      link: "https://cjohnson74.github.io/Team-Profile-Generator/",
      repo: "https://github.com/cjohnson74/Team-Profile-Generator",
      description: "I used object oriented programming to build this Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Testing is key to making code maintainable, so I also wrote a unit test for every part of my code and ensured that it passes each test.",
      role: "Solo Developer",
    },
    {
      name: "Fitness Tracker",
      techStack: "React/MongoDB/NoSQL/Node/JS/CSS/HTML",
      link: "https://mongo-fitness-tracker-app.herokuapp.com/",
      repo: "https://github.com/cjohnson74/NoSQL-Fitness-Tracker",
      description: "I created a workout tracker that has a Mongo database with a Mongoose schema and handles routes with express.",
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
          <a href={project.link}>
            <Project project={project} key={"project" + idx} />
          </a>
        ))}
        </CarouselWrapper>
      </div>
    </div>
  );
}

export default Portfolio;
