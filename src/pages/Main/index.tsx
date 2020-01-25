import React, { FC } from 'react';
import { MainContainer, ContentContainer } from './main.style';
import SideBar from '../../components/Sidebar/Sidebar';
import Project from '../../components/Projects';
import { Card } from '../../index.style';

const Main: FC = () => {
  return (
    <ContentContainer>
      <SideBar />
      <MainContainer>
        <h1>Main Page</h1>
        <div>HEADER</div>
        <Card width={60}>
          <Project title="This is your evolution" />
        </Card>
      </MainContainer>
    </ContentContainer>
  );
};

export default Main;
