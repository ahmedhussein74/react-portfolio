import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import todolist from '../imgs/list.jpg'
import weather from '../imgs/weather.png'
import gpa from '../imgs/gpa.png'
import calculator from '../imgs/calculator.png'

function Projects (){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return(
      <section className='projects w-75 mx-auto d-flex flex-wrap'>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-2 my-2" data-aos={"fade-right"}>
          <a href="https://ahmedhussein74.github.io/ToDoList/" target="_blank" className="text-white">Todo List</a>
          <img src={todolist} className="rounded" />
        </div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-2 my-2" data-aos={"fade-up"}>
          <a href="https://ahmedhussein74.github.io/Weather-App/" target="_blank" className="text-white">Weather App</a>
          <img src={weather} className="rounded" />
        </div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-2 my-2" data-aos={"fade-right"}>
          <a href="https://ahmedhussein74.github.io/GPA-Calculator/" target="_blank" className="text-white">GPA Calculator</a>
          <img src={gpa} className="rounded" />
        </div>
        <div className="w-100 bg-dark d-flex justify-content-between align-items-center rounded px-2 my-2" data-aos={"fade-up"}>
          <a href="https://ahmedhussein74.github.io/Calculator-App/" target="_blank" className="text-white">Calculator</a>
          <img src={calculator} className="rounded" />
        </div>
      </section>
    )
}

export default Projects