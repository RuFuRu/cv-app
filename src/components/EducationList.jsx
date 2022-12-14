function EducationList(props) {
  const list = props.eduXP.map(edu => 
    <ul key={edu.id} className="list-container">
      <li>University: <span className="inner-span">{edu.uniName}</span></li>
      <li>Qualifications: <span className="inner-span">{edu.qualify}</span></li>
      <li>From: <span className="inner-span">{edu.timeFrom}</span></li>
      <li className="li-last">To: <span className="inner-span">{edu.timeTo}</span></li>
      <div className="button-container">
        <button onClick={() => props.handleDelete(edu.id)}>
          Delete</button>
      </div>
    </ul>
  )

  console.log(props.eduXP.map(edu => edu.id))
  return (
    <>
    {list}
    </>
  );
}

export default EducationList;