import { MouseEventHandler } from "react";

export interface ITokenPresenter {
  balance: string;
  symbol: string;
  // tokenId: number;
  userNm: string;
  userinfo: {
    mainWallet: {
      userToken: [];
    };
  };

  onClickTokenDetail: (tokenId: string) => void;
}
export interface ITokenContainer {
  userinfo: any;
  balance: string;
  symbol: string;
  // tokenId: number;
  userNm: string;
}
