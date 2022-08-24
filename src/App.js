import Title from "./components/Title";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";

function App() {
  return (
    <div className="Container">
      <Title />
      <form>
        <GeneralInfo />
        <Education />
      </form>
    </div>
  );
}

export default App;
