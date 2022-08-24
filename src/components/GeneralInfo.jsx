import React, { Component } from 'react';

class GeneralInfo extends Component {
  state = {  } 
  render() { 
    return (
      <div>
        <h3>General Information</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name'/>
        <label htmlFor="surname">Surname</label>
        <input type="text" id='surname' name='surname'/><br />
        <label htmlFor="age">Age</label>
        <input type="number" id='age' name='age'/>
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id='phone' name='phone' 
        placeholder='000000000'
        pattern='[0-9]{9}'/><br />
        <label htmlFor="email">Email</label>
        <input type="email" id='email' name='email'/><br />
        <button type='button'>Save</button>
      </div>
    );
  }
}
 
export default GeneralInfo;