import React, { FC } from 'react';
import { MainContainer, ContentContainer, Col } from './main.style';
import SideBar from '../../components/Sidebar/Sidebar';
import News from '../../components/News';
import { Card } from '../../index.style';
import Wallet from '../../components/Wallet/Wallet';
import StockSymbols from '../../components/StockSymbols/StockSymbols';
import Position from '../../components/Position/Position';

const Main: FC = () => {
  return (
    <>
      {/* <MainContainer>
       <Card width={30} height={20}>
            this is a widget
          </Card>
      </MainContainer> */}

      <ContentContainer data-class="ContentContainer">
        <SideBar />
        <Col>
          <MainContainer>
            <Card width={30} height={20}>
              this is my current position value with a single chart with average price.
            </Card>
            <Card width={30} height={20}>
              TBD
            </Card>
            <Card width={30} height={20}>
              TBD
            </Card>
          </MainContainer>
          <MainContainer>
            <Card width={40}>
              <Wallet />
            </Card>
            <Card width={50} height={70}>
              <Position />
            </Card>
            <Card width={95} height={20}>
              <StockSymbols />
            </Card>
            <Card width={100}>top 30 assets with best performance</Card>
          </MainContainer>
        </Col>

        <div className="side-bar-news">
          <Card width={80} height={90}>
            <News title="What is going on" />
          </Card>
          <Card width={80}>twitter trends</Card>
        </div>
      </ContentContainer>
    </>
  );
};

export default Main;
