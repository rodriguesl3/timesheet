import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { SideBarContainer } from './Sidebar.style';
/**
 * reference to use font awesome with React
 * https://github.com/FortAwesome/react-fontawesome#installation
 */
const SideBar: FC = () => {
  return (
    <SideBarContainer>
      <FontAwesomeIcon icon={['fab', 'apple']} />
      <hr />
      <FontAwesomeIcon icon={['fab', 'microsoft']} />
      <hr />
      <FontAwesomeIcon icon={['fab', 'google']} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={['fab', 'google']} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={['fab', 'google']} />
      <hr />
    </SideBarContainer>
  );
};

export default SideBar;
