import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [isform, setisForm] = useState("");
  useEffect(() => {
    document.title = "Portfolio";

    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/Favicon/favicon.ico";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact onSubmit={() => setisForm(isform)} />
    </div>
  );
}

export default App;
