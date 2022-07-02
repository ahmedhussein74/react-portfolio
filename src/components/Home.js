import React from "react";
import logo from '../bg.jpg'

function Home(){
  return (
    <>
      <main className="home rounded bg-dark text-white mx-auto px-3">
          <p className="pt-5">Hello guys i'm Ahmed Hussein and i'm a <span>Front end Developer</span></p>
          <a href={logo} download className="btn bg-primary mx-auto d-block mt-4 text-white">Download CV</a>
      </main>
    </>
  )
}

export default Home