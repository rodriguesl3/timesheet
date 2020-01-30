import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StockSymbolsTypes, StockSymbol } from '../../store/StockSymbols/types';
import { GlobalState } from '../../store/configureStore';
import { FormControl, Select } from 'bold-ui';

const StockSymbols: FC = () => {
  const dispatch = useDispatch();
  const selectRef = useRef<HTMLInputElement>();
  const stocksSymbolsList = useSelector((state: GlobalState) => {
    console.log(state);
    return state.stockSymbolState;
  });

  const itemToString = (item: any): any => item;

  const renderList = (): object => {
    return (
      <div>
        <FormControl label="Inform your Stock" required>
          <Select<string>
            items={stocksSymbolsList.stockSymbol.map(stock => stock.companyName)}
            itemToString={itemToString}
            name="select stock"
            inputRef={selectRef as React.RefObject<any>}
            multiple
            required
          />
        </FormControl>
      </div>
    );
  };
  useEffect(() => {
    if (selectRef.current)
      dispatch({
        type: StockSymbolsTypes.STOCKSYMBOLS_REQUEST,
        payload: selectRef.current.value,
      });
  }, [selectRef.current?.value]);

  return <div>{stocksSymbolsList && renderList()}</div>;
};

export default StockSymbols;
