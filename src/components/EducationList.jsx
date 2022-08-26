function EducationList(props) {
  const list = props.eduXP.map(edu => 
    <ul key={edu.id}>
      <li>University: {edu.uniName}</li>
      <li>Qualifications: {edu.qualify}</li>
      <li>From: {edu.timeFrom}</li>
      <li>To: {edu.timeTo}</li>
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