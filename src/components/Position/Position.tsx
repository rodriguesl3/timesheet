import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/configureStore';
import Chart from 'react-apexcharts';

type SeriesChart = {
  name: string;
  data: number[];
};

const Position: React.FC = () => {
  const walletCompanies = useSelector((state: GlobalState) => state.walletState.companies);

  const state = {
    series: [] as SeriesChart[],
    options: {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      stroke: {
        width: 7,
        curve: 'smooth',
      },
      xaxis: {
        lines: { show: false },
        type: 'datetime',
        categories: walletCompanies[0]?.chart?.map(elm => elm.date) ?? ['01'],
      },

      yaxis: {
        min: 0,
        max: 330,
        lines: { show: false },
        title: {
          text: 'Position',
        },
      },
      title: {
        text: 'Your position',
        align: 'left',
        style: {
          fontSize: '16px',
          color: '#666',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 4,
        colors: ['#FFA41B'],
        strokeColors: '#fff',
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
    },
  };
  const averagePrice = useCallback(() => {
    if (!walletCompanies || walletCompanies.length === 0) return 0.0;

    walletCompanies.map(wallet =>
      state.series.push({ name: wallet.quote.companyName, data: wallet.chart.map(elm => elm.close) }),
    );

    return walletCompanies
      .map(company => company.quote.latestPrice)
      .reduce((accum, curr): number => {
        return (+accum || 0.0) + curr;
      });
  }, [walletCompanies || []]);

  return (
    <>
      <Chart options={state.options} series={state.series} type="line" width={350} height={350} />
      <hr />
      <h1 style={{ textAlign: 'center' }}>Your balanece is: U$ {averagePrice().toFixed(2)}</h1>
    </>
  );
};

export default Position;
