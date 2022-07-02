import React , {Component} from 'react'
import AOS from 'aos'

class Info extends Component (){
  componentDidMount() {
    AOS.init({
      duration : 2000
    });
  }
  render(){
    return(
      <section className='info text-white w-75 mx-auto p-3 rounded bg-dark' data-aos={"fade-left"}>
      <div>Name</div><div>: Ahmed Hussein</div>
      <div>Age</div><div>: 21 Year</div>
      <div>Job</div><div>: Front end</div>
      <div>Phone</div><div>: 01102466073</div>
      <div>Address</div><div>: Giza - 6<sup>th</sup> October</div>
    </section>
    )
  }
}

export default Info