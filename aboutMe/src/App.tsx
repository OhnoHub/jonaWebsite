import Aside from "./components/Aside";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import "./index.css";

function App() {
  return (
    <div>
      <Sidenav/>
      <Aside></Aside>
      <Main/>
    </div>
  );
}

export default App;
