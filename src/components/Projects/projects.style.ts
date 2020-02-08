import styled from 'styled-components';
import { TabPanel } from 'react-tabs';

export const NewsRootContainer = styled.div`
  height: 100%;
`;

export const TabPanelExtension = styled(TabPanel)`
  height: 500px;
  overflow: auto;
`;

export const ImgContainer = styled.div`
  width: 40%;
  img {
    width: 100%;
  }
`;
export const NewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid gray;

  p {
    width: 40%;
  }
  :hover {
    cursor: pointer;
  }
`;
