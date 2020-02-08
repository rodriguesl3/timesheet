import React, { FC } from 'react';
import { MainContainer, ContentContainer } from './main.style';
import SideBar from '../../components/Sidebar/Sidebar';
import Project from '../../components/Projects';
import { Card } from '../../index.style';
import Wallet from '../../components/Wallet/Wallet';
import StockSymbols from '../../components/StockSymbols/StockSymbols';

const Main: FC = () => {
  return (
    <ContentContainer>
      <SideBar />
      <MainContainer>
        <Card width={30} height={20}>
          <StockSymbols />
        </Card>
        <h1>Main Page</h1>
        <div>HEADER</div>
        <Card width={30} height={100}>
          <Project title="What is going on" />
        </Card>
        <Card width={30} height={20}>
          <Wallet />
        </Card>
      </MainContainer>
    </ContentContainer>
  );
};

export default Main;
