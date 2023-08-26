import ECommerce from "../images/test.jpg";
import Admin from "../images/test.jpg";
import ProBox from "./ProBox";
import WeatherApp from "../images/weather-app.png";
import ToDoList from "../images/test.jpg";
import Chat from "../images/test.jpg";

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
                title="Weather App"
                img={WeatherApp}
                description="Texto"
                techno1="JavaScript"
                techno2="Vanilla Css"
                code="https://github.com/Falotic/Weather_App"
                demo="weather-app-liard-two.vercel.app"
                icon="⛅"
              />

              <ProBox
                title="Admin Dashboard"
                img={Admin}
                description="Texto"
                techno1="React"
                techno2="Vanilla CSS"
                code="#"
                demo="#"
                // scrollY="-74%"
                icon=""
                cName="reversed-proj"
              />

              <ProBox
                title="Todo Task Manager"
                img={ToDoList}
                description="Texto"
                techno1="React"
                techno2="Bootstrap"
                code="#"
                demo="#"
                // scrollY="-89%"
                icon="⛅"
              />

              <ProBox
                title="E-Commerce Web App"
                img={ECommerce}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
