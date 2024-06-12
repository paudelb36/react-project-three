import styled from "styled-components";

export const Button = styled.div`
      font-size: 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      padding: 10px 18px;
      gap: 10px;
      min-width: 220px;
      border:none;
      background: black;
      border-radius: 5px;
      cursor: pointer;
      border: 1px solid transparent;
      transition: 0.4s background ease-in;



      &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
      }

`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;