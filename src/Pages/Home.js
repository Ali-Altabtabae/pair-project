import React from "react";
import Slider from "../Slider";
import { ContainerWrapper } from "../styles";
import peaky from "../Media/peakyBlinderPoster.jpeg";
import styled from "styled-components";

const NewsCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  max-width: 300px;
  text-align: center;
  &:hover {
    box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.2);
  }
`;

const NewsContainer = styled.div`
  padding: 2px 16px;
`;


const NewsImage = styled.img`
  width: 100%;
  height: 400px;
  transition: 0.5s;
`;

const Home = () => {
  return (
    <div>
      <ContainerWrapper>
        <Slider />
      </ContainerWrapper>
      <br />
      <NewsCard>
        <NewsImage src={peaky} alt="First News" />
        <NewsContainer>
          <h4>
            <b>Season 7 is Coming</b>
          </h4>
          <p>
            Murphy, who plays Peaky Blinders leader Tommy Shelby, will be joined
            on screen by Sam Claflin, who returns as fascist politician Oswald
            Mosley, and new cast member Amber Anderson.
          </p>
        </NewsContainer>
      </NewsCard>
    </div>
  );
};

export default Home;
