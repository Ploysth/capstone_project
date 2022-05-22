import styled from "styled-components";

const Card = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  border: 1px solid #36436f;
  text-transform: uppercase;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #36436f;

  .section-1 {
    font-weight: bold;
  }

  .section-2 p.checkin {
    font-weight: bold;
  }

  .section-2 p.flightnumber {
    font-weight: 100;
  }

  .section-3 {
    font-weight: 100;
  }

  .section-4 {
    font-weight: 100;
  }
  &:hover {
    background: #05164d;
    border-color: #36436f;
    color: white;
  }
`;

const BreakCard = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: #ffad00;
  border: 1px solid #36436f;
  text-transform: uppercase;
  font-size: 15px;
  display: flex;
  color: #36436f;

  .break-section-title {
    padding-left: 50px;
    font-weight: bold;
    font-size: 20px;
  }

  &:hover {
    background: #05164d;
    border-color: #36436f;
    color: white;
  }
`;

const ToogleCard = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  background-color: white;
  border: 1px solid #36436f;
  display: flex;
  justify-content: space-around;
`;

const EditButton = styled.button`
  border: 2px solid #05164d;
  background-color: #05164d;
  color: white;
  padding: 0.25rem 2rem;
  cursor: pointer;

  &:hover {
    background: #ffad00;
    border-color: #ffad00;
    color: #36436f;
  }
`;

const DeleteButton = styled.button`
  border: 2px solid #36436f;
  background-color: white;
  color: #36436f;
  padding: 0.25rem 2rem;
  cursor: pointer;

  &:hover {
    background: #ce0d0d;
    border-color: #ce0d0d;
    color: white;
  }
`;

export { Card, ToogleCard, EditButton, DeleteButton, BreakCard };
