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
    e.preventDefault();
  }

  handleInput = (e, val) => {
    this.setState({[val]: e.target.value})
  }

  render() { 
    return (
      <div>
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
            <button>Save</button>
          </form>
        }
        {
          this.state.counter % 2 !== 0 &&
            <form onSubmit={this.handleVisibility}>
              <span>Name: {this.state.name}</span>
              <span>Surname: {this.state.surname}</span><br />
              <span>Age: {this.state.age}</span>
              <span>Phone: {this.state.phone}</span><br />
              <span>Email: {this.state.email}</span><br />
              <button type='submit'>Edit</button>
            </form>
            
        }
      </div>
    );
  }
}
 
export default GeneralInfo;