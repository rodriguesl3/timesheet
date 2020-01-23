import React from 'react';
import { useSelector } from 'react-redux';
import { LoginState, Login } from '../../store/Login/types';
import { NavBarContainer } from './Navbar.style';
const Navbar: React.FC = () => {
  const loginState = useSelector((state: LoginState): Login | undefined => state.credential);

  return (
    <NavBarContainer>
      <div>this is a content...</div>
    </NavBarContainer>
  );

  // return loginState && loginState.username ?
  //   (<NavBarContainer><div></div></NavbarContainer>)
  //   : <div></div>;
};

export default Navbar;
