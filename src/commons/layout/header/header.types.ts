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
    userInfo: any;
    // name: string;
    // userinfo: {
    userId: string;
    userName: string;
    // };
    userNet: [
      {
        chainId: string;
        explorer: string;
        networkId: number;
        networkName: string;
        networkType: string;
        rpcUrl: string;
        userNetId: number;
      }
    ];
    wallets: [
      {
        address: string;
        defFlag: string;
        delFlag: string;
        hdPath: string;
        privateKey: string;
        publicKey: string;
        userId: number;
        userToken: [
          {
            balance: string;
          }
        ];
        walletId: number;
        walletName: string;
      }
    ];
  };

  onClickLogOut: () => void;
  walletMain: () => void;
  onClickNetList: (chainId: string, network: string, explorer: string) => void;
  status: boolean;
  chainId: string;
  token: string;
  onClickMain: () => void;
}
