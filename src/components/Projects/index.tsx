import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../store/configureStore';
import { Company } from '../../store/Wallet/types';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ImgContainer, NewsContainer, TabPanelExtension, NewsRootContainer } from './projects.style';

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

interface ProjectProps {
  title: string;
}

const Project: FC<ProjectProps> = (props: ProjectProps) => {
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
          <TabPanel key={idx} style={{ height: '600px', overflow: 'auto' }}>
            {company.news.map((news, indx: number) => (
              <NewsContainer key={indx}>
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

export default Project;
