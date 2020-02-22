import styled, { StyledComponentBase } from 'styled-components';

export interface CardProps {
  width: number;
  height?: number;
}

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
  justify-content: center;
  align-content: center;
  width: ${({ width = 0 }): number => width}%;
  ${({ height }): string => (height ? `height: ${height}vh` : '')};
  margin: 10px;

  &:hover {
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
  }
`;
