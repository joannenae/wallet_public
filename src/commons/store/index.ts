import { number } from "prop-types";
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
}

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const userInfoState = atom<IUserInfo>({
  key: "userInfoState",
  default: {} as IUserInfo,
});
// export const userInfoState = atom({
//   key: "userInfoState",
//   default: {} as IUserInfo,
// });
