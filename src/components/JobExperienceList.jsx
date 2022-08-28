function JobExperienceList(props) {
  const list = props.jobXP.map(job => 
    <ul key={job.id}>
      <li>Company: <span className="inner-span">{job.company}</span></li>
      <li>Title: <span className="inner-span">{job.jobTitle}</span></li>
      <li>From: <span className="inner-span">{job.from}</span></li>
      <li>To: <span className="inner-span">{job.to}</span></li>
      <li>Desc: <span className="inner-span">{job.jobDesc}</span></li>
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