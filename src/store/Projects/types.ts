import { BaseState } from '../configureStore';

export enum ProjectTypes {
  PROJECT_REQUEST = 'PROJECT_REQUEST',
  PROJECT_SUCCESS = 'PROJECT_SUCCESS',
  PROJECT_FAILURE = 'PROJECT_FAILURE',
}

interface Evolution {
  name: string;
  value: number;
}

export interface Projects {
  id: number;
  name: string;
  icon: string;
  description: string;
  color: string;
  evolution: Evolution[];
}

export interface ProjectState extends BaseState {
  projects: Projects[];
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const PROJECT_INITIAL_STATE: ProjectState = {
  projects: [
    {
      name: 'Tesla',
      icon:
        'data:image/png;base64,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',
      description: 'Cars',
      color: '#2493ff',
      id: 1,
      evolution: [
        {
          name: 'Page A',
          value: 3000,
        },
        {
          name: 'Page B',
          value: 3000,
        },
        {
          name: 'Page C',
          value: 2000,
        },

        {
          name: 'Page D',
          value: 2780,
        },
        {
          name: 'Page E',
          value: 1890,
        },
        {
          name: 'Page F',
          value: 2390,
        },
        {
          name: 'Page G',
          value: 2000,
        },
        {
          name: 'Page H',
          value: 3200,
        },
        {
          name: 'Page I',
          value: 2600,
        },
        {
          name: 'Page J',
          value: 1000,
        },
      ],
    },
    {
      name: 'Apple',
      description: 'IT',
      icon:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADx8fH09PTe3t7BwcHs7OySkpLNzc2fn594eHjm5uaZmZn4+PhjY2P8/PwUFBQ3NzfW1tZGRkZNTU1aWlqDg4Ovr6+Li4tISEhwcHClpaXb29s9PT0xMTElJSXHx8e1tbVUVFRgYGAcHBwqKipzc3N8fHwWFhYfHx+s/Yv1AAAE6ElEQVR4nO2d63aqMBCFGxQR0VbFC2p7hN77/i94Sm0VIfFymuydw5rvr2Wt2YVkMpOZ5OZGEARBEARBEARBEARBEARBEARBEARBEIR/oDfts01wyDRK1ScDth2OCIZjtWPGNsUJyavaM2cb44DRQFW4ZZtjn1gd0bpxmPw5FqgWbIsss1R1hmyT7PLUEKiWbJts0tk2BaqcbZVFEo0+pRK2WfbQC1Rss+xhENieJc1IL7BFU2lqUHjPNswWkUFga4Zh1yQwY1tmixeTwrb4io1JYGtmUpNA1ZYchvEVrtiW2cL4CtviKkKTwFe2ZbaYmxTesS2zhGm9pnK2ZbYoDAJb4+xvbls+CE0zaYuSiFOtwJRtlkVincD3tkyjJTONwHGHbZVNHpoCJyO2UVZZNQS+sU2yTP0rHbclnthTW7Nt2PbYp+rwJwXbGhfsN0M/ov86ZZGEy80ynOp+ibK3wSBb1uQF+XA9m0zS+TrbhJ5L74bRYaw9ZPl5Zx4Ug7E6Jo08nYCSWBP8reLuiUemUX2PdO9FTj3GoZgYbFUfw572if6b6Ynd/ybHCjhDczv3iFlYf6A/OP1EycSfjzWsjyQNi0qmqWfM69eY698+muDxMnO30U5keOHffxGTxZUUV9ir5gtDlG8kpYce6ystvh7uaLwzzqAWYVZoBBdMMRbg7Q0HEH1EiSPMGywhxVmmFZcLGksGBNfO+7+DEHKcWajZZgsX2MMKVAru+TWJQafkaIHgb3QOf4N3WIEEZ7GACtSlfBwDW8yUvDOCxNP5B7tsGVtT0FdICfMzoEBKmQ1yIuWEv0BfSErT6PoI3ECqdbuHCeTMMkhvz9oghglkvcI+TCCr3xLnDCmZi08+YApJAnGx/Zqk0Fjkax3WR3rpxtjvYRVLwXKIDySBuDRwxFKIEqhykkBc5MTa4MY5C5JAc2tdaxTqK7XbpBC37haFolAU8hUGJIW4uZTVcYnzh6zgCbemYdXsdWAKWSE+LrZ4ZinE1UGxggtd+5kbWB01F9RnW+KFpNB4JoJ9CAUKJbhFDas92NhR7wBSgxBQIcklIiq7f+C0BiHLSjlZYeBkSvKJuPiphDLZQBWOGQqvaVv6PYyCE+3RD+4g+H3sQKRIBCtUj3CFxrOeXLFF592gHnEHOC2Fy7cdeMIW6+MyGRUyZDU0ska4ArDTkvGZlgD9BjKCqoJLv4F7gn4AOkZwU9APyBNtkC0lB5AegzLXYI/hRbcflmCPXSoICqEC8QEG/gIT/LoGvRcF7V8rwVfuY9vxGT1eYIfBSA5jQ31Gm57hohE3cA7dx20Hs/ZogFuJrNITXBDFKnKDrU5pnQmwGjCaQFTqNCcqNF5sZJMnpkBIJR/5PGz33Xr084ZdHyuI33lq4DjH78GZ7W6DDFYx9BEuXYYnt8tqbhS1xB+2tG/cpcBp69E6roYiqcJUh5sog+4Jq7g48IQXUWixP9t4d4W17SJ+D28vsSvRuzdYci69+LAoup9rsKAbxoNzUZcPJ5VrODHdrOL6zD89tfPhz4n6NUyhVKz33H3DzkDqjaNvMtJsfz+eWDwH8XPzAc/vkO8dx4tbw+UWB+6z41OLPB2BVTrxd5Lx+XZzWZl2r1jMvqLMdOHtAKwTJInHY0kQBEEQBEEQBEEQBEEQBEEQBEEQBEEQvOQvb4lNh3X4cV8AAAAASUVORK5CYII=',
      color: '#9f4cf1',
      id: 2,
      evolution: [
        {
          name: 'Page A',
          value: 15060,
        },
        {
          name: 'Page B',
          value: 3000,
        },
        {
          name: 'Page C',
          value: 2768,
        },

        {
          name: 'Page D',
          value: 1900,
        },
        {
          name: 'Page E',
          value: 4200,
        },
        {
          name: 'Page F',
          value: 2754,
        },
        {
          name: 'Page G',
          value: 3000,
        },
        {
          name: 'Page H',
          value: 1500,
        },
        {
          name: 'Page I',
          value: 1990,
        },
        {
          name: 'Page J',
          value: 1807,
        },
      ],
    },
    {
      name: 'Nike',
      description: 'Clothes/Sports',
      icon:
        'data:image/png;base64,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',
      color: '#9f4cf1',
      id: 2,
      evolution: [
        {
          name: 'Page A',
          value: 15060,
        },
        {
          name: 'Page B',
          value: 3000,
        },
        {
          name: 'Page C',
          value: 2768,
        },

        {
          name: 'Page D',
          value: 1900,
        },
        {
          name: 'Page E',
          value: 4200,
        },
        {
          name: 'Page F',
          value: 2754,
        },
        {
          name: 'Page G',
          value: 3000,
        },
        {
          name: 'Page H',
          value: 1500,
        },
        {
          name: 'Page I',
          value: 1990,
        },
        {
          name: 'Page J',
          value: 1807,
        },
      ],
    },
  ],
  failure: false,
  success: true,
  loading: false,
};
