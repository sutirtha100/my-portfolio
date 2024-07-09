import React,{useState} from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Dezian from "../Components/Dezian";
import Skill from "../Components/Skill";
import Gallary from "../Components/Gallary";
import Tooling from "../Components/Tooling";
// import Projects from "../Components/Projects";
import Hoby from "../Components/Hoby";
import Footer from "../Components/Footer";
import Links from "../Components/Links";


function Home() {

  const [btnState, SetBtnState] = useState(false);
  const [contState, coSetBtn] = useState(false);

  function handleClick() {
    SetBtnState((btnState) => !btnState);
  }
console.log("konichiva")

  function handleClick2() {
    coSetBtn((contState) => !contState);
  }

  let OnClick = btnState ? " active" : "";

  let waveNav = contState ? " active" : "";

  

  return (
    <>
      <div className="home21">
        <Navbar />
        <Hero/>
        <Dezian />
        <Skill />
        <Tooling />
        <Gallary activeGallary={waveNav}  gallaryData={handleClick2}/>
        {/* <Projects activeData={OnClick} projectData={handleClick}/> */}
        <Hoby projectData={handleClick}  gallaryData={handleClick2}/>
        <Footer />
        <Links />
      </div>
    </>
  );
}

export default Home;
