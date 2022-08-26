import { useState } from 'react';


function Education() {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
        <h3>Add Educational Experience</h3>
        {counter % 2 === 0 &&
          <>
          <button type='button' onClick={handleCounter}>Add</button>
          <button type='button'>Delete</button>
          </>
        }
        {counter % 2 !== 0 &&
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
            <input type="text" id='qualify' name='qualify'
             required /><br />
            <button onClick={handleCounter}>Save</button>
          </form>
        }
      </div>
    );
}

 
export default Education;