import React, { FC } from 'react';
import { ProjectState } from '../../store/Projects/types';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/configureStore';
import { WalletCompanyContainer, WalletCompaniesLogos, WalletCompanyName, WalletTitle } from './Wallet.style';

const Wallet: FC = () => {
  const wallet: ProjectState = useSelector((state: GlobalState) => state.projectState);

  return (
    <div>
      <WalletTitle>Your Portfolio</WalletTitle>
      <WalletCompanyContainer>
        {wallet.projects.map(project => (
          <div key={project.id}>
            <WalletCompaniesLogos src={project.icon} />
            {/* <WalletCompanyName>{project.name}</WalletCompanyName>
            <p>${project.evolution[project.evolution.length - 1].value}</p> */}
          </div>
        ))}
      </WalletCompanyContainer>
    </div>
  );
};

export default Wallet;
