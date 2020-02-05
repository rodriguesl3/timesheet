import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../store/configureStore';
import { WalletCompanyContainer, WalletTitle } from './Wallet.style';
import { WalletState } from '../../store/Wallet/types';

const Wallet: FC = () => {
  const wallet: WalletState = useSelector((state: GlobalState) => state.walletState);

  return (
    <div>
      <WalletTitle>Your Portfolio</WalletTitle>
      {wallet && wallet.companies ? (
        <WalletCompanyContainer>
          {wallet.companies.map((company, idx: number) => (
            <div key={idx}>{company.symbol}</div>
          ))}
        </WalletCompanyContainer>
      ) : (
        <div>Not found a user.</div>
      )}
    </div>
  );
};

export default Wallet;
