import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import { GlobalState } from '../../store/configureStore';
import { WalletCompanyContainer, WalletTitle, SpikeContainer } from './Wallet.style';
import { WalletState } from '../../store/Wallet/types';

import Chart from 'react-apexcharts';

/**
 * https://apexcharts.com/react-chart-demos/candlestick-charts/basic/
 */

const Wallet: FC = () => {
  const wallet: WalletState = useSelector((state: GlobalState) => state.walletState);

  const series = wallet.companies.map(comp => ({
    symbol: comp.quote.companyName,
    chart: [{ data: comp.chart.map(chart => chart.close) }],
  }));

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

  return (
    <>
      <WalletTitle>Your Portfolio</WalletTitle>
      {series.map(segment => (
        <SpikeContainer
          key={segment.symbol}
          onClick={() => {
            console.log(segment);
          }}
        >
          <Chart options={options} series={segment.chart} type="line" width={70} height={50} />
          <div className="symbol-description">
            <span>{segment.symbol}</span>
          </div>
          <div className="spike-arrow">
            {segment.chart[0].data[0] < segment.chart[0].data[segment.chart[0].data.length - 1] ? (
              <span style={{ color: 'green' }}>
                <FaArrowUp />
              </span>
            ) : (
              <span style={{ color: 'red' }}>
                <FaArrowDown />
              </span>
            )}
          </div>
        </SpikeContainer>
      ))}
    </>
  );
};

export default Wallet;
