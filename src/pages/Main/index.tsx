import React, { FC } from 'react';
import { MainContainer, ContentContainer } from './main.style';
import SideBar from '../../components/Sidebar/Sidebar';
import News from '../../components/News';
import { Card } from '../../index.style';
import Wallet from '../../components/Wallet/Wallet';
import StockSymbols from '../../components/StockSymbols/StockSymbols';

const Main: FC = () => {
  return (
    <ContentContainer data-class="ContentContainer">
      <SideBar />
      <MainContainer>
        <Card width={95} height={20}>
          <StockSymbols />
        </Card>
        <Card width={40}>
          <Wallet />
        </Card>
        <Card width={50} height={20}>
          your balanece is: U$ 25.000.000,00
        </Card>
        <Card width={100}>top 30 assets with best performance</Card>
      </MainContainer>

      <div className="side-bar-news">
        <Card width={80} height={90}>
          <News title="What is going on" />
        </Card>
        <Card width={80}>this is another Card</Card>
      </div>
    </ContentContainer>
  );
};

export default Main;
