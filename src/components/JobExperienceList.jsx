function JobExperienceList(props) {
  const list = props.jobXP.map(job => 
    <ul key={job.id}>
      <li>{job.company}</li>
      <li>{job.jobTitle}</li>
      <li>{job.from}</li>
      <li>{job.to}</li>
      <li>{job.jobDesc}</li>
      <button onClick={() => props.handleDelete(job.id)}>
        Delete</button>
    </ul>
  )
  return ( 
    <>
    {list}
    </>
   );
}

export default JobExperienceList;