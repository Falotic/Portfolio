import "../styles/Styles.css";
import Waving from "../images/mano.png";
import Html from "../images/icons/html.svg";
import Css from "../images/icons/css3.svg";
import Js from "../images/icons/javascript.svg";
import React from "../images/icons/react.svg";
import Bootstrap from "../images/icons/bootstrap.svg";
import Sass from "../images/icons/scss.svg";

function Hero() {
  const skillsIcons = [
    {
      img: Html,
      title: "HTML5",
    },
    {
      img: Css,
      title: "CSS3",
    },
    {
      img: Js,
      title: "Java Script",
    },
    {
      img: React,
      title: "React",
    },
    {
      img: Bootstrap,
      title: "Bootstrap CSS",
    },
    {
      img: Sass,
      title: "SCSS",
    },
  ];

  return (
    <>
      <section id="home" className="hero">
        <div className="conteiner">
          <div className="content">
            <div className="hero-main">
              <div className="hero-text">
                <h1>Front-End React Developer</h1>
                <img src={Waving} alt="waving_hand" />
                <p>
                  Hi, I'm David Miguel. A young Front-end React Developer based
                  in Zamora, España. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="www.linkedin.com/in/david-miguel-turiel-758785281"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/Falotic"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </span>
              </div>

              <div className="hero-img"></div>
            </div>

            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.title}>
                      <img src={icon.img} title={icon.title} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
