import React from "react";
import styled from "styled-components";
import { useState } from "react";

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const arrNumber = [1,2,3,4,5,6];
  
  const NumberSelectorHandler = (value)=>{
    setSelectedNumber(value)
    setError("");
  }

  return (
    <NumberSelectorContainer>

      <p className="error">{error}</p>

      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isselected={value == selectedNumber}
            key={i}
            onClick={() => NumberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      
        <p>Select Number</p>

    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`

  

  display: flex;
  flex-direction: column;
  align-items: end;
  padding-right: 30px;

 .flex{
  display: flex;
  gap: 24px;
 }

 p{
  font-size: 24px;
  font-weight: 700px;
 }

 .error{
    color: red;
    font-weight: 450;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;

  background-color: ${(props) => (props.isselected ? "black" : "white")};
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
