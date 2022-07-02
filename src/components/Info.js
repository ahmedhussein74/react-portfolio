import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";


function Info (){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
    return(
      <section className='info text-white w-75 mx-auto p-3 rounded bg-dark' data-aos={"fade-up"}>
        <div>Name</div><div>: Ahmed Hussein</div>
        <div>Age</div><div>: 21 Year</div>
        <div>College</div><div>: FCAI - CU</div>
        <div>Job</div><div>: Front end Dev</div>
        <div>Phone</div><div>: +201102466073</div>
        <div>Address</div><div>: Giza - 6<sup>th</sup> October</div>
    </section>
    )
}

export default Info