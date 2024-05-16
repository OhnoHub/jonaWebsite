import Aside from "./components/Aside";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Sidenav from "./components/Sidenav";
import Work from "./components/Work";
import "./index.css";
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <Sidenav/>
      <Aside></Aside>
      <Main/>
      <Work/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
