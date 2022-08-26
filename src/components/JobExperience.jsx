import React, { useState } from 'react';


function JobExperience() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h3>Add Practical Experience</h3>
      {counter % 2 === 0 &&
        <>
        <button type='button' onClick={handleCounter}>Add</button>
        <button type='button'>Delete</button>
        </>
      }
      {counter % 2 !== 0 &&
        <form>
          <label htmlFor="company">Name of the Company:</label>
          <input type="text" name="company" id="company"
           required/><br />
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name='jobTitle' id='jobTitle'
           required/><br />
          <label htmlFor="from">From:</label>
          <input type="text" name='from' id='from'
           placeholder="10-1970 (month-year)"
           pattern='(\d){2}-(\d){4}'
           required /><br />
          <label htmlFor="to">To:</label>
          <input type="text" name='to' id='to'
           placeholder="10-1971 (month-year)"
           pattern='(\d){2}-(\d){4}'
           required /><br />
          <label htmlFor="jobDesc">Job Description:</label><br />
          <textarea name="jobDesc" id="jobDesc" cols="30" rows="10">
            Please describe your work at the company
          </textarea><br />
          <button type='submit'>Save</button>
        </form>
      }
    </div>
  );

}
 
export default JobExperience;