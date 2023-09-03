import ECommerce from "../images/test.jpg";
import Admin from "../images/admin-dashboard.png";
import ProBox from "./ProBox";
import WeatherApp from "../images/weather-app.png";
import ToDoList from "../images/Todo_task.png";
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
                description="Weather App provide users with accurate and up-to-date weather information for their current location and other locations they are interested in."
                techno1="JavaScript"
                techno2="Vanilla Css"
                code="https://github.com/Falotic/Weather_App"
                demo="https://weather-app-liard-two.vercel.app"
                icon="⛅"
              />

              <ProBox
                title="Admin Dashboard"
                img={Admin}
                description="COMPLETE React Admin Dashboard App | React, Material UI, Data Grid, Light & Dark Mode"
                techno1="React"
                techno2="CSS"
                code="https://github.com/Falotic/Admin-Dashboard.git"
                demo="https://admin-dashboard-ten-rose.vercel.app"
                icon="💻"
                cName="reversed-proj"
              />

              <ProBox
                title="Todo Task Manager"
                img={ToDoList}
                description="Responsive todo task manager whit different type of features "
                techno1="React"
                techno2="Tailwind"
                code="https://github.com/Falotic/Todo-Task-Manager"
                demo="https://todo-task-manager-eight.vercel.app"
                icon="📋"
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
