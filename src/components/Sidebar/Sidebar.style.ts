import styled from 'styled-components';

export const SideBarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  width: 5%;
  min-width: 50px;
  height: 100vh;
  margin-right: 50px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.5);
  }
`;
