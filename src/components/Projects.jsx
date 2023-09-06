import ECommerce from "../images/localhost_3000_.png";
import Admin from "../images/admin-dashboard.png";
import ProBox from "./ProBox";
import WeatherApp from "../images/weather-app.png";
import ToDoList from "../images/Todo_task.png";
import Chat from "../images/text-app.png";

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
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanilla css"
                code="https://github.com/Falotic/EComerce_Web_App"
                demo="https://e-comerce-web-app.vercel.app"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />

              <ProBox
                title="Real Time Chat Application"
                img={Chat}
                description="Chat Application using react and firebase whit a google logging and a simple interface"
                techno1="React"
                techno2="vanilla css"
                code="https://github.com/Falotic/Chat_Web_App"
                demo="https://chat-web-app-taupe.vercel.app"
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
