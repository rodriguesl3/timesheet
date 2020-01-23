import styled from 'styled-components';
import cityBackground from '../../assets/New_York.png';

export const Description = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 51%;
  height: 100vh;
  color: white;
  box-shadow: 0 0 35px 20px rgba(0, 0, 0, 0.5);
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-image: url(${cityBackground});
`;

export const LoginFormContainer = styled.div`
  width: 30%;
  height: 220px;
  margin-right: 10%;
  padding: 20px;
  border: 1px solid black;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.6);
  /* &:hover{

  } */
`;

export const ButtonsContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
`;

export const Line = styled.hr`
  width: 100%;
`;
