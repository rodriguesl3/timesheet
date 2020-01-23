import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { SideBarContainer } from './Sidebar.style';

const SideBar: FC = () => {
  return (
    <SideBarContainer>
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
    </SideBarContainer>
  );
};

export default SideBar;
