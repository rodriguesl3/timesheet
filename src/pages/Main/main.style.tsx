import styled from 'styled-components';

export const MainContainer = styled.div``;

export const SideBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 999;
  transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: blue;
  width: 20%;
  height: 100vh;
`;

export const ContentContainer = styled.div``;
