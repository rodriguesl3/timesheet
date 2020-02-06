import styled from 'styled-components';
import { Tabs } from 'bold-ui';

export const TabContainerExtension = styled(Tabs)`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
  height: 100vh;

  .news-container {
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-bottom: 2px solid gray;
  }
`;
