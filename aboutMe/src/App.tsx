import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import "./index.css";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Aboutme from "./components/Aboutme";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Aboutme />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
