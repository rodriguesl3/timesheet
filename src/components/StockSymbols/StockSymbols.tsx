import React, { FC, useCallback, useEffect, useMemo, useRef, RefObject, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { StockSymbolsTypes } from '../../store/StockSymbols/types';
import { GlobalState } from '../../store/configureStore';

const StockSymbols: FC = () => {
  const dispatch = useDispatch();
  const stocksSymbolsList = useSelector((state: GlobalState) => state.stockSymbolState);
  const [selected, setSelected] = useState();

  const stockSymbolFiltered = (searchTerm: any): void => {
    console.log(searchTerm);

    dispatch({
      type: StockSymbolsTypes.STOCKSIMBOLS_FILTER,
      payload: searchTerm,
    });
  };

  const handleChange = (selectedOption: any) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selected);
  };

  const renderList = (): object => {
    return (
      <div>
        <Select
          value={selected}
          onInputChange={searchTerm => stockSymbolFiltered(searchTerm)}
          options={stocksSymbolsList.stockSymbolFiltered.map(elm => ({
            value: elm.symbol,
            label: elm.companyName,
          }))}
          onChange={handleChange}
        />
      </div>
    );
  };

  // useEffect(() => {
  //   const filter = listRef.current?.current?.value ?? '';
  //   stockSymbolFiltered(filter);
  // }, [listRef.current?.current?.value ?? '']);

  useEffect(() => {
    dispatch({
      type: StockSymbolsTypes.STOCKSYMBOLS_REQUEST,
    });
  }, []);

  return <div>{stocksSymbolsList && renderList()}</div>;
};

export default StockSymbols;
