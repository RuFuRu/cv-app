function JobExperienceList(props) {
  const list = props.jobXP.map(job => 
    <ul key={job.id} className="list-container">
      <li>Company: <span className="inner-span">{job.company}</span></li>
      <li>Title: <span className="inner-span">{job.jobTitle}</span></li>
      <li>From: <span className="inner-span">{job.from}</span></li>
      <li>To: <span className="inner-span">{job.to}</span></li>
      <li className="li-last">Desc: <span className="inner-span">{job.jobDesc}</span></li>
      <div className="button-container">
        <button onClick={() => props.handleDelete(job.id)}>
          Delete</button>
      </div>
    </ul>
  )
  return ( 
    <>
    {list}
    </>
   );
}

export default JobExperienceList;