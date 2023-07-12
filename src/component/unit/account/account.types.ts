import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IAccountContainer {
  walletMain: () => void;
  setAccountActive: Dispatch<SetStateAction<boolean>>;
  chainId: string;
  userinfo: {
    userName: string;
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
            symbol: string;
            tokenSym: string;
          }
        ];
        walletId: number;
        walletName: string;
      }
    ];
  };
  token: string;
  // userinfo: {
  //   name: string;
  //   userNet: [
  //     {
  //       chainID: string;
  //       networkId: number;
  //       networkNm: string;
  //       networkType: string;
  //     }
  //   ];
  //   wallets: [
  //     {
  //       address: string;
  //       defFlag: string;
  //       delFlag: string;
  //       hdPath: string;
  //       privateKey: string;
  //       publicKey: string;
  //       userId: number;
  //       userToken: [
  //         {
  //           balance: string;
  //         }
  //       ];
  //       walletId: number;
  //       walletName: string;
  //     }
  //   ];
  // };
}
export interface IAccountPresenter {
  status: string;
  onClickCloseAccount: () => void;
  createModal: () => void;
  changeCreate: () => void;

  isCreateModal: boolean;
  handleOk: () => void;
  handleCancel: () => void;

  onChangeTab: (key: string) => void;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;

  defaultValue?: string | null | undefined;
  //   defaultValue: LabeledValue;
  selectChange?:
    | ((
        value: string,
        option:
          | {
              value: string;
              label: string;
            }
          | {
              value: string;
              label: string;
            }[]
      ) => void)
    | undefined;

  changeGet: () => void;

  name: string;
  onChangeCreate: (event: ChangeEvent<HTMLInputElement>) => void;
  destoryFile: () => void;

  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  file?: string[];

  onChangeKeyPass: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrivateKey: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickWalletPk: () => void;
  onClickKeystore: () => void;

  createName: string;
  privatekey: string;
  keypassword: string;
  num: string;
  userinfo: {
    userName: string;
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
            symbol: string;
            tokenSym: string;
          }
        ];
        walletId: number;
        walletName: string;
      }
    ];
  };
  // userinfo: {
  //   userName: string;
  //   userNet: [
  //     {
  //       chainID: string;
  //       networkId: number;
  //       networkNm: string;
  //       networkType: string;
  //     }
  //   ];
  //   wallets: [
  //     {
  //       address: string;
  //       defFlag: string;
  //       delFlag: string;
  //       hdPath: string;
  //       privateKey: string;
  //       publicKey: string;
  //       userId: number;
  //       userToken: [
  //         {
  //           balance: string;
  //           tokens: {
  //             tokenSym: string;
  //           };
  //         }
  //       ];
  //       walletId: number;
  //       walletName: string;
  //     }
  //   ];
  // };

  onClickDeleteWallet: (walletId: number) => void;
  onClickWallet: (walletId: number) => void;
  symbol: string;
  token: string;
}
