import { BaseState } from '../configureStore';

export enum WalletTypes {
  WALLET_REQUEST = 'WALLET_REQUEST',
  WALLET_SUCCESS = 'WALLET_SUCCESS',
  WALLET_FAILURE = 'WALLET_FAILURE',
}

export interface WalletState extends BaseState {
  companies: Company[];
}

export interface Company {
  symbol: string;
  news: News[];
  chart: Chart[];
  quote: Quote[];
}

export interface News {
  datetime: any;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string;
  image: string;
  lang: string;
  hasPaywall: boolean;
}

export interface Chart {
  date: string;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  uOpen: number;
  uClose: number;
  uHigh: number;
  uLow: number;
  uVolume: number;
  change: number;
  changePercent: number;
  label: string;
  changeOverTime: number;
}

export interface Quote {
  symbol: string;
  companyName: string;
  primaryExchange: string;
  calculationPrice: string;
  open?: any;
  openTime?: any;
  close?: any;
  closeTime?: any;
  high?: any;
  low?: any;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume?: any;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexLastUpdated: number;
  delayedPrice?: any;
  delayedPriceTime?: any;
  oddLotDelayedPrice?: any;
  oddLotDelayedPriceTime?: any;
  extendedPrice?: any;
  extendedChange?: any;
  extendedChangePercent?: any;
  extendedPriceTime?: any;
  previousClose: number;
  previousVolume: number;
  change: number;
  changePercent: number;
  volume?: any;
  iexMarketPercent: number;
  iexVolume: number;
  avgTotalVolume: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexAskPrice: number;
  iexAskSize: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
  lastTradeTime: number;
  isUSMarketOpen: boolean;
}
