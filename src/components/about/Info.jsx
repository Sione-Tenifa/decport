import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">7 Years Working</span> <br></br> 
        <span className="about__subtitle">Software Developer</span>  <br></br>       
        <span className="about__subtitle">Web Developer</span> 
      </div>

      <div className="about__box">
        <i className="bx bx-basketball about__icon"></i>
        <h3 className="about__title">Coaching</h3>
        <span className="about__subtitle">8 years coaching Basketball and Football</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">48 + Projects</span>
      </div>
    </div>
  );
};

export default Info;
