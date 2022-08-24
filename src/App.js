import Title from "./components/Title";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import JobExperience from "./components/JobExperience";

function App() {
  return (
    <div className="Container">
      <Title />
      <form>
        <GeneralInfo />
        <Education />
        <JobExperience />
      </form>
    </div>
  );
}

export default App;
