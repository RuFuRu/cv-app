import React, { Component } from 'react';

class Education extends Component {
  state = { 
    counter: 0
   } 

  handleCounter = () => {
    this.setState({counter: this.state.counter + 1})
  } 
  
  render() { 
    return (
      <div>
        <h3>Add Educational Experience</h3>
        {this.state.counter % 2 === 0 &&
          <>
          <button type='button' onClick={this.handleCounter}>Add</button>
          <button type='button'>Delete</button>
          </>
        }
        {this.state.counter % 2 !== 0 &&
          <form>
            <label htmlFor="uniName">Name of the University:</label>
            <input type="text" id='uniName' name='uniName' required/><br />
            <label htmlFor="timeFrom">From:</label>
            <input type="text" id ="timeFrom" name="timeFrom"
             placeholder="10-1970 (month-year)"
             pattern='(\d){2}-(\d){4}'
             required /><br />
            <label htmlFor="timeTo">To:</label>
            <input type="text" id='timeTo' name='timeTo'
             placeholder="10-1971 (month-year)"
             pattern= '(\d){2}-(\d){4}'
             required /><br />
            <label htmlFor="qualify">Qualifications:</label>
            <input type="text" id='qualify' name='qualify'/><br />
            <button>Save</button>
          </form>
        }
      </div>
    );
  }
}
 
export default Education;