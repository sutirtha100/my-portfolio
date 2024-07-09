import React from "react";


function Hoby(props) {

  return (
    <>
      <div className="hoby-section" id="project">



        <div className="first-cap" data-aos="zoom-in-left">
          <h1>
            <span className="hobyspan">SEE</span> MY WORK{" "}
            <span className="hobyspan">?</span>{" "}
            <span>
              <img src="" alt="" />
            </span>
          </h1>
          <h1>
            CLICK HERE BELLOW <span></span>
          </h1>
        </div>

        <div className="arrow-png">
          <img src="./assets/images/scribble.png" alt="" />
        </div>

        <div className="click-section">
          <div className="photo-btn" data-aos="fade-up-right">
            <span className="link-button" onClick={props.gallaryData}>See MY Phothos</span>{" "}
            <div className="eren-png">
              <img src="./assets/images/eren.png" alt="" />
            </div>
          </div>
          <div className="project-btn" data-aos="fade-up-left" >
            <span className="link-button2" > <a href="https://github.com/sutirtha100" target="_blank" rel="noopener noreferrer">
            My GitHub Profile </a></span>
            <div className="eren-png">
              <img src="./assets/images/luffy.png" alt="" />
            </div>
          </div>
        </div>

        <div className="bus-png">
          <img src="./assets/images/bus.png" alt="" />
        </div>
        <div className="lion-png"  data-aos="zoom-in-right">
          <img src="./assets/images/lion.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Hoby;
