import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <div className="text">
        <h2>How to play dice game</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>If you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  margin-top: 40px;
  border-radius: 10px;
    margin-bottom: 60px;
  h2 {
    font-size: 24px;
    padding-bottom: 20px;
  }
  .text {
    padding: 20px;
    margin-top: 24px;
  }
`;
