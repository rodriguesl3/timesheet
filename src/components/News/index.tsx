import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/configureStore';
import { Company } from '../../store/Wallet/types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ImgContainer, NewsContainer, NewsRootContainer, TabPanelExt } from './news.style';

/**
 * Rechart value: http://recharts.org/en-US/guide/getting-started
 */

/**
 *
 * #fcce58
 * #2493ff
 * #9f4cf1
 *
 */

interface NewsProps {
  title: string;
}

const News: FC<NewsProps> = (props: NewsProps) => {
  const assets: Company[] = useSelector((state: GlobalState) => state.walletState.companies);

  return (
    <NewsRootContainer>
      <h1>{props.title}</h1>
      <Tabs>
        <TabList>
          {assets.map((company: Company, idx: number) => (
            <Tab key={idx}>{company.symbol}</Tab>
          ))}
        </TabList>
        {assets.map((company, idx: number) => (
          <TabPanel key={idx} style={{ overflowX: 'hidden', height: '75vh' }}>
            {company.news.map((news, indx: number) => (
              <NewsContainer
                key={indx}
                onClick={(): void => {
                  window.open(news.url, '_blank');
                }}
              >
                <ImgContainer>
                  <img src={news.image} alt="news-headline" />
                </ImgContainer>
                <p>{news.headline}</p>
              </NewsContainer>
            ))}
          </TabPanel>
        ))}
      </Tabs>
    </NewsRootContainer>
  );
};

export default News;
