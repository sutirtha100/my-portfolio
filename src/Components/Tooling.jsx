import React from "react";
import Lottie from "lottie-react";
import animationData from "../SvgAssets/Animation - 1689614218137.json";
import Typewriter from "typewriter-effect";

function Tooling() {
  return (
    <>
      <div className="toolmain-sec-div">
        <div className="header-tool-section">
          <div className="tool-caption1">
            <span className="span-title11">SKILL SETS</span>
          </div>
          <div className="tool-caption">
            <Typewriter
              options={{
                strings: "Tools I Use",
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>

        <div className="tool-sec-bg">
          <div className="tool-sec" data-aos="fade-right">
            <div className="tech-section">
              <div className="too-sec-div-info">
                <div className="tech" data-aos="flip-left">
                  <i class="fa-brands fa-python"></i>
                  <span>Python</span>
                </div>
                <div className="tech" data-aos="flip-left">
                  <i class="fa-brands fa-react"></i>
                  <span>React</span>
                </div>
                <div className="tech" data-aos="flip-left">
                  <i class="fa-brands fa-bootstrap"></i>
                  <span>Bootstrap</span>
                </div>

                <div className="tech" data-aos="flip-left">
                  <i class="fa-brands fa-html5"></i>
                  <span>Html</span>
                </div>
                <div className="tech" data-aos="flip-left">
                  <i class="fa-brands fa-css3-alt"></i>
                  <span>Css</span>
                </div>
                <div className="tech"data-aos="flip-left">
                  <i class="fa-brands fa-square-js"></i>
                  <span>Javascript</span>
                </div>

                <div className="tech"data-aos="flip-left">
                  <i class="fa-brands fa-envira"></i>
                  <span>MongoDB</span>
                </div>
                <div className="tech"data-aos="flip-left">
                  <i class="fa-brands fa-node"></i>
                  <span>Node</span>
                </div>
                <div className="tech"data-aos="flip-left">
                  <i class="fa-brands fa-square-js"></i>
                  <span>Javascript</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="phone-svg"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <Lottie className="tool-svf" animationData={animationData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tooling;
