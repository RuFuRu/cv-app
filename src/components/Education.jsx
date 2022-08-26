import { useState } from 'react';
import EducationList from './EducationList';


function Education() {
  const [counter, setCounter] = useState(0);
  const [uniName, setUniName] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [qualify, setQualify] = useState('');
  const [id, setId] = useState(0);
  const [eduXP, setEduXP] = useState([]);


  const handleCounter = () => {
    setCounter(counter + 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1)
    setEduXP([...eduXP, {uniName, timeFrom, timeTo, qualify, id}]);
    console.log(eduXP);
    setCounter(counter + 1);
  }

  return (
    <div>
        <h3>Add Educational Experience</h3>
        {counter % 2 === 0 &&
          <>
          <EducationList eduXP = {eduXP}/>
          <button type='button' onClick={handleCounter}>Add</button>
          <button type='button'>Delete</button>
          </>
        }
        {counter % 2 !== 0 &&
          <form onSubmit={handleSubmit}>
            <label htmlFor="uniName">Name of the University:</label>
            <input type="text" id='uniName' name='uniName' required 
             onChange={(e) => {setUniName(e.target.value)}}/><br />
            <label htmlFor="timeFrom">From:</label>
            <input type="text" id ="timeFrom" name="timeFrom"
             placeholder="10-1970 (month-year)"
             pattern='(\d){2}-(\d){4}'
             required 
             onChange={(e) => {setTimeFrom(e.target.value)}}/><br />
            <label htmlFor="timeTo">To:</label>
            <input type="text" id='timeTo' name='timeTo'
             placeholder="10-1971 (month-year)"
             pattern= '(\d){2}-(\d){4}'
             required 
             onChange={(e) => setTimeTo(e.target.value)}/><br />
            <label htmlFor="qualify">Qualifications:</label>
            <input type="text" id='qualify' name='qualify'
             required 
             onChange={(e) => setQualify(e.target.value)}/><br />
            <button>Save</button>
          </form>
        }
      </div>
    );
}

 
export default Education;