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
      
    </div>
  );

}
 
export default JobExperience;