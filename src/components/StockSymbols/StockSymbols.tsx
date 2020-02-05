import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { StockSymbolsTypes, StockSymbol } from '../../store/StockSymbols/types';
import { GlobalState } from '../../store/configureStore';
import { Button } from 'bold-ui';
import { SymbolContainer } from './StockSymbols.style';
import { WalletTypes } from '../../store/Wallet/types';

/**
 * Thanks!!! :)
 * https://jedwatson.github.io/react-select/
 */
const StockSymbols: FC = () => {
  const dispatch = useDispatch();
  const stocksSymbolsList = useSelector((state: GlobalState) => state.stockSymbolState);
  const [selected, setSelected] = useState();

  const requestSymbol = (): void => {
    dispatch({
      type: WalletTypes.WALLET_REQUEST,
      payload: selected as StockSymbol[],
    });
  };

  const stockSymbolFiltered = (searchTerm: any): void => {
    dispatch({
      type: StockSymbolsTypes.STOCKSIMBOLS_FILTER,
      payload: searchTerm,
    });
  };

  const handleChange = (selectedOption: any) => {
    setSelected([...selectedOption]);
    console.log(`Option selected:`, selected);
  };

  const renderList = (): object => {
    return (
      <SymbolContainer>
        <Select
          className="stock-symbol-select"
          value={selected}
          onInputChange={searchTerm => stockSymbolFiltered(searchTerm)}
          isMulti={true}
          options={stocksSymbolsList.stockSymbolFiltered.map(elm => ({
            value: elm.symbol,
            label: `${elm.symbol} - ${elm.companyName}`,
          }))}
          onChange={handleChange}
        />

        <Button kind="primary" size="small" onClick={requestSymbol}>
          Search
        </Button>
      </SymbolContainer>
    );
  };

  useEffect(() => {
    dispatch({
      type: StockSymbolsTypes.STOCKSYMBOLS_REQUEST,
    });
  }, []);

  return <div>{stocksSymbolsList && renderList()}</div>;
};

export default StockSymbols;
