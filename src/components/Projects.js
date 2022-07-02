import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import facebook from '../imgs/facebook.png'

function Projects (){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return(
      <section className='projects w-75 mx-auto d-flex flex-wrap'>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-3 my-3" data-aos={"fade-left"}>
          <a href="" target="_blank" className="text-white">Portfolio</a>
          <img src={facebook} className="rounded" />
        </div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-3 my-3" data-aos={"fade-right"}>
          <a href="" target="_blank" className="text-white">Portfolio</a>
          <img src={facebook} className="rounded" />
        </div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-3 my-3" data-aos={"fade-left"}>
          <a href="" target="_blank" className="text-white">Portfolio</a>
          <img src={facebook} className="rounded" />
        </div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-3 my-3" data-aos={"fade-right"}>
          <a href="" target="_blank" className="text-white">Portfolio</a>
          <img src={facebook} className="rounded" />
        </div>
      </section>
    )
}

export default Projects