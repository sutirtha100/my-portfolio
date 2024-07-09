import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


function Dezian() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="dezian12" id="about">
      <div className="profile-pic" data-aos="zoom-in-left"><img src="./assets/images/myprofile.jpg" alt="" /></div>
      <div className="dezian12-1st">
        <h1 className="jjjj"  data-aos="fade-up-right">About</h1>
        <div className="about-details" data-aos="fade-right">
          <p>
            Hallo My Name is Sutirtha choudhury and I am a highly motivated and results-oriented full-stack web
            developer with a passion for building innovative and user-friendly
            applications. I have a strong understanding of both the front-end
            and back-end aspects of web development.
          </p>
        </div>
        <div className="button-for-cv">
          <a href="https://drive.google.com/drive/folders/1p8cyR8uyGVJPgGwLxfamc8l3uz0JKvWV?usp=drive_link"> <button>ReSUME</button> </a>
        </div>
      </div>
      <div className="dezian12-2nd">
        <div className="border-dezian">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#222222",
                  smooth: "boolean",
                },
              },
              fullScreen: {
                enable: false,
                zIndex: 5,
              },
              fpsLimit: 20,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 10,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.9,
                  },
                },
              },

              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 100,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: false,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 900,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dezian;
