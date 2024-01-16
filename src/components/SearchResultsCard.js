import React from "react";
import styled from "styled-components";

function StatsCard(result) {
  return (
    <Container>
      <Count>{result.name}</Count>
      <Title>Rating:{result.rating}</Title>
    </Container>
  );
}

export default StatsCard;

const Container = styled.div`
  border: 0.5px solid #647696;
  width: 150vh;
  height: 10vh;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vw 1vh;
  box-shadow: 6px -6px 20px rgba(88, 88, 88, 0.16),
    -6px 6px 20px rgba(88, 88, 88, 0.16), -6px -6px 20px rgba(88, 88, 88, 0.16),
    6px 6px 20px rgba(88, 88, 88, 0.16);
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 30px 45px -15px rgba(255, 255, 255, 0.57);
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Count = styled.div`
  font-weight: 700;
  font-size: 3vh;
`;

const Title = styled.p``;