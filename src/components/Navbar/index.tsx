import React from "react";

import { FaDiscord, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { IoEllipsisVertical, IoCloseOutline } from "react-icons/io5";

import { Container } from "./styles";

interface NavbarProps {
  name: string;
  github?: string;
  linkedin?: string;
  discord?: string;
  twitter?: string;
  handleClick: () => void;
  isOpen: boolean;
}

const Navbar = ({
  name,
  github,
  linkedin,
  discord,
  twitter,
  handleClick,
  isOpen,
}: NavbarProps) => {
  return (
    <Container theme={isOpen}>
      <h2>{name}</h2>
      <ul className="social-web">
        {github && (
          <li>
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </li>
        )}
        {discord && (
          <li>
            <a href={discord} target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
          </li>
        )}
        {twitter && (
          <li>
            <a href={twitter} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </li>
        )}
      </ul>
      {}
      <div className="social-mobile">
        {isOpen ? (
          <IoCloseOutline onClick={handleClick} />
        ) : (
          <IoEllipsisVertical onClick={handleClick} />
        )}
        <ul>
          {github && (
            <li>
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
          )}
          {discord && (
            <li>
              <a href={discord} target="_blank" rel="noreferrer">
                <FaDiscord />
              </a>
            </li>
          )}
          {twitter && (
            <li>
              <a href={twitter} target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
            </li>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Navbar;
