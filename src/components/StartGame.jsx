import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img className="diceImg" src="/images/dices.png" />
      </div>
      <div className="content">
        <h1>DICE-O-MANIA</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 10px;

  .diceImg{
    margin-left: -100px;
  }

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

