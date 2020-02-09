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
        <Card width={70} height={20}>
          <StockSymbols />
        </Card>
        {/* <h1>Main Page</h1>
        <div>HEADER</div> */}

        <Card width={70} height={20}>
          <Wallet />
        </Card>
      </MainContainer>

      <div className="side-bar-news">
        {/* News... */}
        <Card width={90} height={90}>
          <News title="What is going on" />
        </Card>
      </div>
    </ContentContainer>
  );
};

export default Main;
