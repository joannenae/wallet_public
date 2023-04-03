import { Dispatch, SetStateAction } from "react";

export interface IHeaderPresenter {
  active: boolean;
  accountActive: boolean;
  onClickActive: () => void;
  onClickAccountActive: () => void;
  onClickMoveToPage: (path: string) => () => void;
  setAccountActive: Dispatch<SetStateAction<boolean>>;
  onClickNetWork: () => void;
  userinfo: {
    name: string;
    userId: number;
    userNet: [
      {
        chainID: string;
        networkId: number;
        networkNm: string;
        networkType: string;
      }
    ];
    wallet: [
      {
        address: string;
        deFlag: string;
        walletId: number;
        walletNm: string;
        token: [
          {
            balance: string;
            symbol: string;
            tokenId: number;
          }
        ];
      }
    ];
  };

  onClickLogOut: () => void;
}
