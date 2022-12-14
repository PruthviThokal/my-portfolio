import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Prathviraj Thokal</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Engineer",
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a href="https://drive.google.com/file/d/1hlRmg76HJ51fEl2YODtcLd51o2INPPqO/view?usp=sharing"
                  className="btn btn-primary"
                  role="button"
                  target="_blank"
                >
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
