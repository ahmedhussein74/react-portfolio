import React, {Component} from 'react'
import axios from 'axios'

class Blog extends Component{
  state = {
    users : []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      this.setState({
        users : res.data
      })
    })
  }

  render(){
    return(
      <section className='text-center'>
        {this.state.users.map( user => <div key={user.id} className='py-2'>{user.name}</div>)}
      </section>
    )
  }
}

export default Blog