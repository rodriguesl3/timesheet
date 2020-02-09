import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../../store/configureStore';
import { WalletCompanyContainer, WalletTitle } from './Wallet.style';
import { WalletState } from '../../store/Wallet/types';

import ApexCharts from 'apexcharts';

/**
 * https://apexcharts.com/react-chart-demos/candlestick-charts/basic/
 */

const Wallet: FC = () => {
  const wallet: WalletState = useSelector((state: GlobalState) => state.walletState);

  const series = [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ];

  const options = {
    series: series,
    chart: {
      type: 'line',
      width: 200,
      height: 135,
      sparkline: {
        enabled: true,
      },
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: (seriesName: any): string => {
            return '';
          },
        },
      },
      marker: {
        show: false,
      },
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
  }, [series]);

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
      <div id="chart"></div>
    </div>
  );
};

export default Wallet;
