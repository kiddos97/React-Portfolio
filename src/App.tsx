import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
