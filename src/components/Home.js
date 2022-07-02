import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

function Home(){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
      <main className="home rounded bg-dark text-white mx-auto px-3" data-aos={"zoom-in"}>
          <p className="pt-5">Hello guys i'm Ahmed Hussein and i'm a <span>Front end Developer</span></p>
          <a href="" download className="btn bg-primary mx-auto d-block mt-4 text-white">Download CV</a>
      </main>
    </>
  )
}

export default Home