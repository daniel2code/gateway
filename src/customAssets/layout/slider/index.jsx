import React from "react";

import { Container, Body, Tracker, TrackerBox } from "./sliderStyles";

const Index = ({ image, title, text }) => {
  return (
    <Container>
      <img src={image} alt="card illustration" />
      <Body>
        <h4>{title}</h4>
        <p>
          {text}
        </p>
      </Body>

      <TrackerBox>
        <Tracker></Tracker>
        <Tracker></Tracker>
        <Tracker></Tracker>
      </TrackerBox>
    </Container>
  );
};

export default Index;
