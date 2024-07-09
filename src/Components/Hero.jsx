import React from "react";

function Hero() {
  return (
    <>
      {/* <section className="title-section">
        <div className="for-dev-h1" data-aos="fade-right">
          <h1 className="dev1">DEVLOPER</h1>
          <span>
            <img
              src="./assets/images/2211.w026.n002.2759B.p1.2759.jpg"
              alt=""
            />
          </span>
          <h1 className="for-trans">DEVLO</h1>
          <div className="for-hide-hover">
            <img src="./assets/images/arrow69.png" alt="" />
            <span>
              <h6>Artistic</h6>
            </span>
          </div>
        </div>

        <div className="for-dev-h2">
          <h1 className="for-trans">WEBAPP</h1>

          <div className="for-hide-hover-2">
            <h6>Creative</h6>
            <div className="">
            <img
              src="./assets/images/arrow-with-scribble.png"
              alt=""
            />
            </div>
          </div>
          
          <span>
            <img src="./assets/images/4-dark.png" alt="" />
          </span>

          <h1 className="dev2">WEBAPP</h1>
        </div>

        <div className="for-dev-h3" data-aos="fade-right">
          <h1 className="dev3">PHOTOGRAPHER</h1>
          <span>
            <img
              src="./assets/images/Iconarchive-Handdrawn-Camera-Handdrawn-3D-Blue-Camera.512.png"
              alt=""
            />
          </span>
          <h1 className="for-trans">DEVLO</h1>
          <div className="for-hide-hover-3">
            <img src="./assets/images/arrow69.png" alt="" />
            <span>
              <h6>Capture The Art</h6>
            </span>
          </div>
        </div>
      </section> */}

<div className="hero-section-main">
      <div className="app-set-one">
        <div className="main-section-left">
          <h1>
          Expertise:{" "}
            <div className="roller">
              <span id="rolltext">
                HTML
                <br />
                CSS
                <br />
                Java
                <br />
                Java Script
                <br />
                React Js
                <br />
                SQL
                <br />
                Mongo DB
                <br />
                Node Js
                <br />
                Express Js
                <br />
              </span>
              {/* <span id="spare-time">too much spare time?</span> */}
              <br />
            </div>
          </h1>
        </div>
      </div>
      <div className="app-set-two">
        <div className="right-rotate-info-fullstack">
          <a href="https://www.linkedin.com/in/sutirtha-choudhury-85a834204/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
          Full Stack Developer
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Hero;
