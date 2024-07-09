import React, { useState } from "react";
import Lottie from "lottie-react";
import mailPlane from "../SvgAssets/animation_lk79ibml.json";
import astronot from "../SvgAssets/animation_lk796xeb.json";

function Navbar() {
  const [btnState, SetBtnState] = useState(false);
  const [contState, coSetBtn] = useState(false);

  function handleClick() {
    SetBtnState((btnState) => !btnState);
  }

  function handleClick2() {
    coSetBtn((contState) => !contState);
  }

  let OnClick = btnState ? " active" : "";

  let waveNav = contState ? " active" : "";

  return (
    <>

      <section className="nav-main-sec " >
        <div className="for-navbar">
          <div className="nav-left-sec">
            S<span style={{ color: "#cb413f" }}>u</span>tirtha
          </div>
          <div className="nav-right-sec">
            <ul>
              <li>
                <a href="https://github.com/sutirtha100" target="_blank" rel="noopener noreferrer">Projects</a>
              </li>
              <li>
                <a href="https://drive.google.com/drive/folders/1p8cyR8uyGVJPgGwLxfamc8l3uz0JKvWV?usp=drive_link">Resume</a>
              </li>
              <li>
                <span onClick={handleClick2} className="for-contact-btn">
                  SideNavbar
                </span>
              </li>
              <li>
                <span onClick={handleClick} className="for-contact-btn">
                  CONTACT
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={`contact-main-sec${OnClick}`} id="contact-main-sec">
          <div className="contact-section">
            <div onClick={handleClick} className="close-container">
              <div className="leftright"></div>
              <div className="rightleft"></div>
              <label className="close">close</label>
            </div>
            <div className="con-png-1">
              <Lottie className="mailplane" animationData={mailPlane} />
            </div>
            <div className="contact-left-div">
              <div className="con-left-head">
                <h1>WANA CHAT OVER?</h1>
              </div>
              <div className="contact-left-div-form">
                <form action="/">
                  <label htmlFor="My Name Is">My Name Is</label>
                  <br />
                  <input type="text" placeholder="your name" />
                  <br />
                  <label htmlFor="/">You Can Contact me..</label>
                  <br />
                  <input type="text" placeholder="your phone-no" />
                  <br />
                  <label htmlFor="/">Or By Email at</label>
                  <br />
                  <input type="text" placeholder="your email" />
                </form>
              </div>
            </div>
            <div className="contact-right-div">
              <div className="contact-right-div-info">
                <h3>GIVE US A CALL!</h3>
                <h6>+918637024370</h6>
                <Lottie className="astronot" animationData={astronot} />
              </div>

              <div className="contact-right-div-info">
                <h3>WRITE WITH US</h3>
                <h6>sutirthachoudhury89@gmail.com</h6>
              </div>

              <div className="contact-right-div-info">
                <h3>COME AND SEE US</h3>
                <h6>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil, soluta.
                </h6>
              </div>
            </div>
          </div>
          <button className="con-btn">SEND MESSAGE</button>

          <div className="for-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#cb413f"
                fill-opacity="1"
                d="M0,128L14.1,122.7C28.2,117,56,107,85,122.7C112.9,139,141,181,169,213.3C197.6,245,226,267,254,229.3C282.4,192,311,96,339,48C367.1,0,395,0,424,37.3C451.8,75,480,149,508,170.7C536.5,192,565,160,593,128C621.2,96,649,64,678,85.3C705.9,107,734,181,762,202.7C790.6,224,819,192,847,170.7C875.3,149,904,139,932,133.3C960,128,988,128,1016,149.3C1044.7,171,1073,213,1101,192C1129.4,171,1158,85,1186,64C1214.1,43,1242,85,1271,128C1298.8,171,1327,213,1355,213.3C1383.5,213,1412,171,1426,149.3L1440,128L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* SideNav */}

        <div className={`side-nav-full-div${waveNav}`}>
          <div className="close-container" onClick={handleClick2}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <label className="close">close</label>
          </div>
          <div className="side-nav-main">
            <div className="side-left">
              <a href="#project" onClick={handleClick2}>
                {" "}
                <div className="first-h1">
                  <h1>PROJECTS</h1>
                </div>{" "}
              </a>

              <div className="second-h1">
                <h1>PHOTOGRAPHY</h1>
              </div>
              <div className="third-h1">
                {" "}
              <a href="#about"  onClick={handleClick2}> <h1>ABOUT ME</h1> </a>
              </div>

              <div className="botton-span-sec">
                <div className="span-arrow-png">
                  {" "}
                  <img src="./assets/images/yyyyy.png" alt="" />{" "}
                </div>
                <div className="dezian-span">
                  <span>Artistic</span> <span>+</span> <span>Devloper</span>{" "}
                  <span>+</span> <span>Photography</span>
                </div>
              </div>
            </div>
            <div className="side-right">
              <div className="hire-info">
                <h3>WANT TO HIRE ME?</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  non fuga atque distinctio dolor dicta corporis in iusto odio
                  ex. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Laborum, velit?
                </p>
              </div>
              <div className="hire-btn">
                <button>HIRE ME!</button>
              </div>
            </div>
          </div>
          <div className="for-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#cb413f"
                fill-opacity="1"
                d="M0,128L14.1,122.7C28.2,117,56,107,85,122.7C112.9,139,141,181,169,213.3C197.6,245,226,267,254,229.3C282.4,192,311,96,339,48C367.1,0,395,0,424,37.3C451.8,75,480,149,508,170.7C536.5,192,565,160,593,128C621.2,96,649,64,678,85.3C705.9,107,734,181,762,202.7C790.6,224,819,192,847,170.7C875.3,149,904,139,932,133.3C960,128,988,128,1016,149.3C1044.7,171,1073,213,1101,192C1129.4,171,1158,85,1186,64C1214.1,43,1242,85,1271,128C1298.8,171,1327,213,1355,213.3C1383.5,213,1412,171,1426,149.3L1440,128L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <div className="ham-button-div">
        <div className="ml-contact-btn">
          <span onClick={handleClick} className="for-contact-btn">
            CONTACT
          </span>
        </div>
        <div className="ham-menu" onClick={handleClick2}>
          <div className="ham-span-div">
            <span className="sp1"></span>
            <span className="sp3"></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
