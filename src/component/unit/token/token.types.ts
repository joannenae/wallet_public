export interface ITokenPresenter {
  balance: string;
  symbol: string;
  tokenId: number;
  onClickTokenDetail: () => void;
}
export interface ITokenContainer {
  balance: string;
  symbol: string;
  tokenId: number;
}
