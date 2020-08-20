import React from "react";
import styled from "styled-components";
import Card from "../card/card.component";

const CardList = (props) => {
  const { monsters } = props;
  // console.log(monsters);
  return (
    <Wrapper>
      {monsters &&
        monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export default CardList;
