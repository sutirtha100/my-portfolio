import React from "react";

function Gallary(props) {
  return (
    <>
      <section
        className={`gallary-main-div${props.activeGallary}`}
        id="gallary-main-div"
      >
        <div className="img-sec-main">
          <div className="close-container" onClick={props.gallaryData}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <label className="close">close</label>
          </div>


<div className="caption-for-gallary-sec">
  <h1>Here Is Some Of My collection</h1>
</div>
          <ul className="main-nav">
            <li className="item1">
              <div className="bg"></div>
            </li>
            <li className="item2">
              <div className="bg"></div>
            </li>
            <li className="item3">
              <div className="bg"></div>
            </li>
            <li className="item4">
              <div className="bg"></div>
            </li>
            <li className="item5">
              <div className="bg"></div>
            </li>
          </ul>
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
      </section>
    </>
  );
}

export default Gallary;
