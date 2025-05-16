import { useEffect, useMemo, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import logo from './assets/logo.png';
import portrait from './assets/Portrait.jpg';
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrow from "./assets/Arrow.png";

const projectSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  className: "project-list",
  arrows: false
};

// 0: Name 1: img link 2: repo/deploy link
var projectList = [["Demo Social Network API", "https://github.com/C-Hickman23/Social-Network-Api/raw/main/image.png", "https://github.com/C-Hickman23/Social-Network-Api"],
                   ["Demo 5 Day Forecast", "https://github.com/C-Hickman23/5-Day-Forecast-Assignment/raw/main/image.png", "https://c-hickman23.github.io/5-Day-Forecast-Assignment/"]];

export function updateProjects() {
  let projectDivs = projectList.map(project =>  
    <div class="project-div">
      <img src={project.at(1)}></img>
      <a href={project.at(2)} target="_blank">{project.at(0)}</a>
    </div>
  );
  return projectDivs;
}

function App() {
  let sliderRef = useRef(null);

  const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadAll(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#2f6540",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            grab :{
              distance: 600,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 175,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }),
      [],
    );

    if (!init) return <></>;

    return (
      <div>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

      <header>
        <img src={logo} className="logo" alt="logo" />
        <nav>
        </nav>
      </header>

      <div class="hero"></div>

      <main>
        <p>Nothing uploaded just yet</p>
      </main>
    </div>
  );
}

export default App