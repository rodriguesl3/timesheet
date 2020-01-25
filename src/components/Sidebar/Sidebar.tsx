import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faGamepad, faAtom, faMagic, faBolt, faGhost, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { SideBarContainer } from './Sidebar.style';
/**
 * reference to use font awesome with React
 * https://github.com/FortAwesome/react-fontawesome#installation
 */
const SideBar: FC = () => {
  return (
    <SideBarContainer>
      <FontAwesomeIcon icon={faAtom} />
      <hr />
      <FontAwesomeIcon icon={faMagic} />
      <hr />
      <FontAwesomeIcon icon={faBolt} />
      <hr />
      <FontAwesomeIcon icon={faGamepad} />
      <hr />
      <FontAwesomeIcon icon={faGhost} />
      <hr />
      <FontAwesomeIcon icon={faRocket} />
      <hr />
      <FontAwesomeIcon icon={faMailBulk} />
      <hr />
    </SideBarContainer>
  );
};

export default SideBar;
