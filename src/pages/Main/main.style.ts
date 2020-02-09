import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70%;
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
