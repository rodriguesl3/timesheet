import styled from 'styled-components';

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 90px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e9e9e9;
  width: 100%;

  .side-bar-news {
    width: 45%;
  }
`;

export const NewsContainer = styled.div`
  width: 30%;
  height: 100vh;
`;
