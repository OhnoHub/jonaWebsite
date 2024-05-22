import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import "./index.css";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
