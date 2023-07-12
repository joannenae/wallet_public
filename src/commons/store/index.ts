import { atom } from "recoil";

// export interface IUserNet {
//   chainID: string;
//   networkId: number;
//   networkNm: string;
//   networkType: string;
// }
// export interface IUserWallet {
//   address: string;
//   delFlag: string;
//   balance: string;
//   symbol: string;
//   tokenId: number;
//   walletId: number;
//   walletNm: string;
// }

export interface IUserInfo {
  userinfo: {
    name: string;
    userNet: [
      {
        chainID: string;
        networkId: number;
        networkNm: string;
        networkType: string;
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
    // mainWallet: { userToken: [{ tokenSym: string; balance: string }] };
  };
}

export interface IWalletInfo {}

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const userInfoState = atom<IUserInfo>({
  key: "userInfoState",
  default: {} as IUserInfo,
});

export const walletInfoState = atom({
  key: "walletInfoState",
  default: {} as IWalletInfo,
});

export const userChainIdState = atom({
  key: "userChainIdState",
  default: "",
});

export const explorerState = atom({
  key: "explorerState",
  default: "",
});

export const walletIdState = atom({
  key: "walletIdState",
  default: "",
});
// export const userInfoState = atom({
//   key: "userInfoState",
//   default: {} as IUserInfo,
// });
