import React from "react";
import Links from "./Links";

function Skill() {
  return (
    <>
      <section className="skill-set">
        <div className="skill-set-header" data-aos="fade-right">
          <h1><span style={{color:"#cb413f"}} >Short</span>View</h1>
        </div>
        
        <div className="skill-22">
          <div className="cards-skill" data-aos="zoom-in">
            <div className="card-skill-img">
              <img
                src="./assets/images/62Z_2107.w020.n001.1244B.p15.1244.jpg"
                alt=""
              />
            </div>
            <div className="card-info">
              {" "}
              <h2>Web Project</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>

            {/* <div className="sectiondetails-info">
              <h1>Web Dev</h1>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae itaque dicta quisquam architecto modi enim
                praesentium eum. Dolorum, eveniet natus.
              </p>
            </div> */}
          </div>

          <div className="cards-skill" data-aos="zoom-in">
            <div className="card-skill-img">
              <img src="./assets/images/36687.jpg" alt="" />
            </div>
            <div className="card-info">
              {" "}
              <h2>Photography</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>
          </div>

          <div className="cards-skill" data-aos="zoom-in">
            <div className="card-skill-img">
              <img
                src="./assets/images/62Z_2107.w020.n001.1244B.p15.1244.jpg"
                alt=""
              />
            </div>
            <div className="card-info">
              {" "}
              <h2>Web Project</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>
          </div>

          <div className="cards-skill" data-aos="zoom-in">
            <div className="card-skill-img">
              <img
                src="./assets/images/62Z_2107.w020.n001.1244B.p15.1244.jpg"
                alt=""
              />
            </div>
            <div className="card-info">
              {" "}
              <h2>Web Project</h2>
              <br />
              <h6>Lorem ipsum</h6>
            </div>

          </div>
        </div>
  
        <Links/>
      </section>
    </>
  );
}

export default Skill;
