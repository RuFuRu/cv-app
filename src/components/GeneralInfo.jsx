import React, { Component } from 'react';

class GeneralInfo extends Component {
  state = {
    counter: 0,
    name: '',
    surname: '',
    age: 0,
    phone: 0,
    email: ''
  }
  
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleVisibility = (e) => {
    this.setState({counter: this.state.counter + 1});
    if(this.state.counter % 2 === 0) {
      e.preventDefault();
    }
  }

  handleInput = (e, val) => {
    this.setState({[val]: e.target.value})
  }

  render() { 
    return (
      <div className='general-info'>
        <h3>General Information</h3>
        {this.state.counter % 2 === 0 &&
          <form onSubmit={this.handleVisibility}>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' required
             onChange={(e) => this.handleInput(e, "name")}/>
            <label htmlFor="surname">Surname</label>
            <input type="text" id='surname' name='surname' required
             onChange={(e) => this.handleInput(e, "surname")}/><br />
            <label htmlFor="age">Age</label>
            <input type="number" id='age' name='age' required
             onChange={(e) => this.handleInput(e, "age")}/>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id='phone' name='phone' required
             placeholder='000000000'
             pattern='[0-9]{9}'
             onChange={(e) => this.handleInput(e, "phone")}/><br />
            <label htmlFor="email">Email</label> 
            <input type="email" id='email' name='email' required
             onChange={(e) => this.handleInput(e, "email")}/><br />
            <button className='save-button'>Save</button>
          </form>
        }
        {
          this.state.counter % 2 !== 0 &&
            <span className='span-container'>
              <span>Full Name: <span className='inner-span'>{this.state.name} {this.state.surname}</span></span><br />
              <span>Age: <span className='inner-span'>{this.state.age}</span></span><br />
              <span>Phone: <span className='inner-span'>{this.state.phone}</span></span><br />
              <span>Email: <span className='inner-span'>{this.state.email}</span></span><br />
              <button type='button' onClick={this.handleVisibility}>Edit</button>
            </span>
            
        }
      </div>
    );
  }
}
 
export default GeneralInfo;