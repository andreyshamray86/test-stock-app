interface ICrossMargin {
  supportCrossMargin: boolean;
  maxLeverage: number;
}

interface ISymbolTradeLimit {
  symbol: string;
  priceScale: number;
  quantityScale: number;
  amountScale: number;
  minQuantity: string;
  minAmount: string;
  highestBid: string;
  lowestAsk: string;
}

export interface IMarket {
  symbol: string;
  baseCurrencyName: string;
  quoteCurrencyName: string;
  displayName: string;
  state: string;
  visibleStartTime: number;
  tradableStartTime: number;
  symbolTradeLimit: ISymbolTradeLimit;
  crossMargin: ICrossMargin;
}
