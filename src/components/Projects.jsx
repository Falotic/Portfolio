import LandingPage from "../images/test.jpg";
import Calculator from "../images/test.jpg";
import ProBox from "./ProBox";
import WeatherApp from "../images/test.jpg";
import ToDoList from "../images/test.jpg";
import Chat from "../images/test.jpg";
import Game from "../images/test.jpg";

function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="conteiner">
          <div className="project-content">
            <p>Portfolio</p>
            <h3>Each project is a demonstration of my knowledge.</h3>
            <div className="projects-grid">
              <ProBox
                title="Landing Page"
                img={LandingPage}
                description="Texto"
                techno1="React"
                techno2="SCSS"
                code="#"
                demo="#"
                // scrollY="-83%"
                icon="🚗"
              />

              <ProBox
                title="Calculator"
                img={Calculator}
                description="Texto"
                techno1="React"
                techno2="Vanila CSS"
                code="#"
                demo="#"
                // scrollY="-74%"
                icon=""
                cName="reversed-proj"
              />

              <ProBox
                title="Weather App"
                img={WeatherApp}
                description="Texto"
                techno1="React"
                techno2="Bootstrap"
                code="#"
                demo="#"
                // scrollY="-89%"
                icon="⛅"
              />

              <ProBox
                title="To Do List"
                img={ToDoList}
                description="Texto"
                techno1="React"
                techno2="Bootstrap"
                code="#"
                demo="#"
                // scrollY="-71%"
                icon="📝"
                cName="reversed-proj"
              />

              <ProBox
                title="Real Time Chat Application"
                img={Chat}
                description="Texto"
                techno1="React"
                techno2="SCSS"
                code="#"
                demo="#"
                // scrollY="-83%"
                icon="📱"
              />

              <ProBox
                title="Web Game"
                img={Game}
                description="Texto"
                techno1="React"
                techno2="SCSS"
                code="#"
                demo="#"
                // scrollY="-83%"
                icon="🎮"
                cName="reversed-proj"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
