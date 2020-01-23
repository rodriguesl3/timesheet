import React, { FC } from 'react';
import { MainContainer, SideBarContainer } from './main.style';

const Main: FC = () => {
  return (
    <div>
      <SideBarContainer>
        <ul>
          <li>this is an item</li>
          <li>this is an item</li>
          <li>this is an item</li>
          <li>this is an item</li>
          <li>this is an item</li>
        </ul>
      </SideBarContainer>
      <MainContainer>
        <h1>Main Page</h1>
        <div>HEADER</div>
        <div>Main Content</div>
      </MainContainer>
    </div>
  );
};

export default Main;
