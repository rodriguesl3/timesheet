import { BaseState } from '../configureStore';

//{"Company Name": "iShares MSCI All Country Asia Information Technology Index Fund", "Symbol": "AAIT"}

export interface StockSymbol {
  companyName: string;
  symbol: string;
}

export enum StockSymbolsTypes {
  STOCKSYMBOLS_REQUEST = 'STOCKSYMBOLS_REQUEST',
  STOCKSYMBOLS_SUCCESS = 'STOCKSYMBOLS_SUCCESS',
  STOCKSYMBOLS_FAILURE = 'STOCKSYMBOLS_FAILURE',
}

export interface StockSymbolsState extends BaseState {
  stockSymbol: StockSymbol[];
}

export const STOCKSYMBOLS_INITIAL_STATE: StockSymbolsState = {
  failure: false,
  loading: false,
  success: true,
  stockSymbol: [
    { companyName: 'iShares MSCI All Country Asia Information Technology Index Fund', symbol: 'AAIT' },
    { companyName: 'American Airlines Group, Inc.', symbol: 'AAL' },
    { companyName: 'Atlantic American Corporation', symbol: 'AAME' },
    { companyName: 'Applied Optoelectronics, Inc.', symbol: 'AAOI' },
    { companyName: 'AAON, Inc.', symbol: 'AAON' },
    { companyName: 'Apple Inc.', symbol: 'AAPL' },
    { companyName: 'Avalanche Biotechnologies, Inc.', symbol: 'AAVL' },
    { companyName: 'Atlas Air Worldwide Holdings', symbol: 'AAWW' },
    { companyName: 'iShares MSCI All Country Asia ex Japan Index Fund', symbol: 'AAXJ' },
    { companyName: 'Aoxin Tianli Group, Inc.', symbol: 'ABAC' },
    { companyName: 'ABAXIS, Inc.', symbol: 'ABAX' },
    { companyName: 'Ameris Bancorp', symbol: 'ABCB' },
    { companyName: 'Cambium Learning Group, Inc.', symbol: 'ABCD' },
    { companyName: 'The Advisory Board Company', symbol: 'ABCO' },
    { companyName: 'Anchor BanCorp Wisconsin Inc.', symbol: 'ABCW' },
    { companyName: 'Alcentra Capital Corp.', symbol: 'ABDC' },
    { companyName: 'Abengoa, S.A.', symbol: 'ABGB' },
    { companyName: 'ARCA biopharma, Inc.', symbol: 'ABIO' },
    { companyName: 'ABIOMED, Inc.', symbol: 'ABMD' },
    { companyName: 'Autobytel Inc.', symbol: 'ABTL' },
    { companyName: 'Abengoa Yield plc', symbol: 'ABY' },
    { companyName: 'ACADIA Pharmaceuticals Inc.', symbol: 'ACAD' },
  ],
};
