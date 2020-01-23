import React, { FC } from 'react';
import { MainContainer, ContentContainer } from './main.style';
import SideBar from '../../components/Sidebar/Sidebar';

const Main: FC = () => {
  return (
    <ContentContainer>
      <SideBar />
      <MainContainer>
        <h1>Main Page</h1>
        <div>HEADER</div>
        <div>Main Content</div>
      </MainContainer>
    </ContentContainer>
  );
};

export default Main;
