import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

function Skills(){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
      <section className="skills bg-dark rounded mx-auto text-white overflow-hidden" data-aos={"fade-left"}>
        <div>HTML</div>
        <div>CSS</div>
        <div>SASS</div>
        <div>JavaScript</div>
        <div>Jquery</div>
        <div>Bootstrap</div>
        <div>AJAX</div>
        <div>JSON</div>
        <div>React</div>
        <div>Django</div>
        <div>Git &amp; Github</div>
        <div>SQL</div>
      </section>
    </>
  )
}

export default Skills