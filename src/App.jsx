import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function App() {
  const [bools, setBools] = useState(false);
  const [sw1, setSw1] = useState(Math.random() < 0.5);
  const [sw2, setSw2] = useState(Math.random() < 0.5);
  const [sw3, setSw3] = useState(Math.random() < 0.5);
  const [sw4, setSw4] = useState(Math.random() < 0.5);
  const [sw5, setSw5] = useState(Math.random() < 0.5);

  useEffect(() => {
    setSw1(Math.random() < 0.5);
    setSw2(Math.random() < 0.5);
    setSw3(Math.random() < 0.5);
    setSw4(Math.random() < 0.5);
    setSw5(Math.random() < 0.5);
  }, [bools]);

  return (
    <>
    <h1>Random Switchs</h1>
      <Card>
        <Switch state={sw1} onClick={() => setBools(!bools)} />
        <Switch state={sw2} onClick={() => setBools(!bools)} />
        <Switch state={sw3} onClick={() => setBools(!bools)} />
        <Switch state={sw4} onClick={() => setBools(!bools)} />
        <Switch state={sw5} onClick={() => setBools(!bools)} />
      </Card>
    </>
  );
}

const Card = styled.main`
  background-color: #fff;
  width: 250px;
  min-height: 400px;
  box-sizing: border-box;
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column nowrap;
  border-radius: 10px;
`;

const Switch = styled.div`
  background-color: ${({ state }) => (state ? "#21212c" : "#e0e0e0")};
  width: 100px;
  height: 35px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  margin-bottom: 1rem;
  transition: all 0.4s;

  &::after {
    content: "";
    position: absolute;
    width: 35px;
    height: 35px;
    border: 5px ${({ state }) => (state ? "cyan" : "orangered")} solid;
    box-shadow: 0px 0px 15px ${({ state }) => (state ? "cyan" : "orangered")};
    box-sizing: border-box;
    border-radius: 50%;
    background-color: white;
    transition: all 0.4s;
    cursor: pointer;
    right: ${({ state }) => (state ? "0" : "65px")};
  }
`;
