import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "ReactJs_skill", content: "ReactJs", porcentage: "75%", value: "75" },
        { id: "NodeJS_skill", content: "NodeJs and ExpressJs", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "95"
        },
        { id: "AngularJs_skill", content: "AngularJs", porcentage: "80%", value: "80" },
        {
          id: "Java_skill",
          content: "Java",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB and MySQL",
          porcentage: "80%",
          value: "80"
        },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I'm an ingenious Software Engineer in @Cointab Software Pvt. Ltd. "
        },
        {
          id: "second-p-about",
          content:
            "I'm experienced with about 2 years for building web applications by different tech stack such as Javascript, Node js, React.js, Redux, AngularJS, Ant Design, Material UI, Bootstrap and css. Also having the experience in teaching programming languages to the engineering and diploma students"
        },
        {
          id: "third-p-about",
          content:
            "Seeking to learn more tech stack and increase my knowledge to build highly scalable frontend and backed architectures."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
