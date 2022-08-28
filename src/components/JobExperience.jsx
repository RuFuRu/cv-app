import React, { useState } from 'react';
import JobExperienceList from './JobExperienceList';


function JobExperience() {
  const [counter, setCounter] = useState(0);
  const [company, setCompany] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [id, setId] = useState(1);
  const [jobXP, setJobXP] = useState([]);

  const handleCounter = () => {
    setCounter(counter + 1)
  }

  const handleDelete = (id) => {
    const newJobXP = jobXP.filter(job => job.id !== id);
    console.log(newJobXP);
    setJobXP(newJobXP);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    setJobXP([...jobXP, {company, jobTitle, from, to, jobDesc, id}]);
    setCounter(counter + 1);
  }

  return (
    <div className='Job-Experience'>
      <h3>Add Practical Experience</h3>
      {counter % 2 === 0 &&
        <>
        <JobExperienceList jobXP={jobXP} handleDelete={handleDelete}/>
        <button type='button' onClick={handleCounter}>Add</button>
        </>
      }
      {counter % 2 !== 0 &&
        <form onSubmit={handleSubmit}>
          <label htmlFor="company">Name of the Company:</label>
          <input type="text" name="company" id="company"
           required
           onChange={(e) => setCompany(e.target.value)}/><br />
          <label htmlFor="jobTitle">Job Title:</label>
          <input type="text" name='jobTitle' id='jobTitle'
           required
           onChange={(e) => setJobTitle(e.target.value)}/><br />
          <label htmlFor="from">From:</label>
          <input type="text" name='from' id='from'
           placeholder="10-1970 (month-year)"
           pattern='(\d){2}-(\d){4}'
           required 
           onChange={(e) => setFrom(e.target.value)}/><br />
          <label htmlFor="to">To:</label>
          <input type="text" name='to' id='to'
           placeholder="10-1971 (month-year)"
           pattern='(\d){2}-(\d){4}'
           required 
           onChange={(e) => setTo(e.target.value)}/><br />
          <label htmlFor="jobDesc">Job Description:</label><br />
          <textarea name="jobDesc" id="jobDesc" cols="30" rows="10"
           value={jobDesc}
           placeholder="Please describe your job"
           onChange={(e) => setJobDesc(e.target.value)}
           required >
          </textarea><br />
          <button type='submit'>Save</button>
        </form>
      }
    </div>
  );

}
 
export default JobExperience;