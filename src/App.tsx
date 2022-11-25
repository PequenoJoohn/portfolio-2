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
    name: "john doe.",
    firstName: "John",
    role: "DESIGN",
    github: "https://www.github.com",
    linkedin: "https://www.linkedin.com/",
    discord: "https://discord.gg/",
    twitter: "https://twitter.com/",
  };

  function handleOpenMenu() {
    setIsOpen(!isOpen);
  }

  const projects = [
    {
      name: "Project 1",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      name: "Project 2",
      image: "https://picsum.photos/200/300?random=2",
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
          <Person name={user.firstName} />
        </div>
        <div>
          <About />
          <Projects projects={projects} />
        </div>
      </div>
      <p className="role">{user.role}</p>
      <Global />
    </Container>
  );
}

export default App;
