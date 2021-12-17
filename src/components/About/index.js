import React from 'react';
import profileImage from '../../assets/profile/profile-image-zoom.png';

function About() {
  return (
    <section className="my-8">
      <div className="my-10">
        <div id="profile-img" className="profile-img my-5 monochrome">
        <img src={profileImage} alt="Carson D. Johnson" width="198" height="200" class="mx-2 float-left circle-border shadow"/>
        </div>
        <p class="m-5 double-space light">
        Full-stack Software Engineering professional with newly acquired skills from the University of Central Florida full-stack boot camp. Experienced in JavaScript, HTML, CSS, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express.js, and React.js. Possesses an extensive mathematics background that can also be utilized and leveraged in a Data Science role. Able to grasp new concepts quickly and implement them immediately to solve problems effectively. Ready to take on any challenge and do whatever it takes; to effectively solve big picture problems. Great leadership abilities and can bring the best out of their team. Also equipped with an eagerness to listen, learn and follow the direction of a project manager to fit any role a team needs.
        </p>
      </div>
    </section>
  );
}

export default About;
