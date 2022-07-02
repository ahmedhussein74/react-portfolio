import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import facebook from '../imgs/facebook.png'
import github from '../imgs/github.png'
import gmail from '../imgs/gmail.png'
import linkedin from '../imgs/linkedin.png'
import telegram from '../imgs/telegram.png'
import whatsapp from '../imgs/whatsapp.png'

function Contact(){
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <section className="contact w-75 bg-dark rounded mx-auto justify-content-center"  data-aos={"flip-left"}>
      <a href="mailto:ahmedhusseinofficial22@gmail.com" target="_blank" className="text-white"><img src={gmail} />Gmail</a>
      <a href="https://wa.me/qr/6VYZYWSEUQMEC1" target="_blank" className="text-white"><img src={whatsapp} />Whatsapp</a>
      <a href="https://www.linkedin.com/in/ahmed-hussein-23b95b1b8" target="_blank" className="text-white"><img src={linkedin} />Linked in</a>
      <a href="https://www.facebook.com/AhmedHusein22" target="_blank" className="text-white"><img src={facebook} />Facebook</a>
      <a href="href=https://t.me/A_Hussein72" target="_blank" className="text-white"><img src={telegram} />Telegram</a>
      <a href="https://github.com/ahmedhussein74" target="_blank" className="text-white"><img src={github} />Github</a>
    </section>
  )
}

export default Contact