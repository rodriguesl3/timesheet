import React, { FC } from 'react';
import { LineChart, Line, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';
import { useSelector } from 'react-redux';
import { ProjectState } from '../../store/Projects/types';
import { GlobalState } from '../../store/configureStore';
import { Company } from '../../store/Wallet/types';
import { Tabs, TabItem } from 'bold-ui';
import { TabContainerExtension } from './projects.style';

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
  //const projects: ProjectState = useSelector((state: GlobalState) => state.projectState);
  const assets: Company[] = useSelector((state: GlobalState) => state.walletState.companies);

  return (
    <div>
      <h1>{props.title}</h1>
      <TabContainerExtension>
        {assets.map((company: Company, idx: number) => (
          <>
            <TabItem key={idx} onClick={console.log}>
              {company.symbol}
            </TabItem>
            <div className="news-container">
              {company.news.map((news, indx: number) => (
                <div key={indx}>{news.summary}</div>
              ))}
            </div>
          </>
        ))}
      </TabContainerExtension>
    </div>
  );
};

export default Project;
