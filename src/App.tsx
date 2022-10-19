import React, { useState } from "react";
import About from "./components/About";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Person from "./components/Person";
import Projects from "./components/Projects";
import { Container } from "./styles";
import Global from "./styles/Global";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const user = {
    name: "Jonathan.",
    github: "https://github.com/PequenoJoohn",
    linkedin: "https://www.linkedin.com/in/jonathanlm/",
    discord: "https://discord.gg/bZdNzScxMz",
    twitter: "https://twitter.com/JoohnMatos",
  };

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  const projects = [
    {
      nome: "Lab Zone",
      image:
        "https://jonathan-matos.netlify.app/static/media/desktop.e216cabf.jpg",
    },
    {
      nome: "Ramon Template",
      image:
        "https://jonathan-matos.netlify.app/static/media/desktop.e216cabf.jpg",
    },
  ];

  return (
    <Container>
      <Navbar
        name={user.name}
        github={user.github}
        linkedin={user.linkedin}
        discord={user.discord}
        twitter={user.twitter}
        handleClick={handleOpenMenu}
        isOpen={isOpen}
      />
      <Main text={user.name} />
      <div className="whyme">
        <div>
          <Person />
        </div>
        <div>
          <About />
          <Projects projects={projects} />
        </div>
      </div>
      <Global />
    </Container>
  );
}

export default App;
