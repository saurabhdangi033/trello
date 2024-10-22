import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { lg } from "../BreakPoints";
import trelloLogo from "../Images/trello-logo.svg";
const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem; /* Adjust padding for better spacing */
  background-color: rgba(0, 101, 255, 0.1); /* Subtle blue tint */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  z-index: 100;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 101, 255, 0.3); /* Darker on hover */
  }

  ${lg({
    padding: "0 1rem", /* Adjust padding for smaller screens */
  })}
`;

const Icon = styled.img`
  margin-left: 1rem;
  height: 2.5rem; /* Set consistent logo size */
  cursor: pointer;

  ${lg({
    marginLeft: "0",
  })}
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${lg({
    gap: "0.5rem", /* Adjust spacing for smaller screens */
  })}
`;

const Link = styled.a`
  text-decoration: none; /* Remove underline */
  color: #0952cc;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #004bbd; /* Darker blue on hover */
  }
`;

const Button = styled.button`
  background-color: #0065ff;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem; /* Increase padding for a better look */
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #004bbd;
    transform: scale(1.05); /* Slight zoom on hover */
  }
`;

const IndexNav = () => {
  let history = useHistory();
  return (
    <Container>
      <Icon src={trelloLogo} />
      <RightSide>
        <Link onClick={()=>history.push("/login")}>Log in</Link>
        <Button onClick={()=>history.push("/register")}>Sign up</Button>
      </RightSide>
    </Container>
  );
};

export default IndexNav;