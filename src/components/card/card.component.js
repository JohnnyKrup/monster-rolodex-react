import React from "react";
import styled from "styled-components";

const Card = (props) => {
  /**
   * API call to get random monster images
   * https://robohash.org
   */
  return (
    <Wrapper>
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  :hover {
    transform: scale(1.05);
  }
`;

export default Card;
