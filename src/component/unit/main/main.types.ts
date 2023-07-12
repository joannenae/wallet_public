import { SetStateAction } from "react";
import { Dispatch } from "react";
export interface IMainPresenter {
  isModalOpen: boolean;
  showModal: () => void;
  handleOk: () => void;
  handleCancel: () => void;

  isCopy: boolean;
  handleCopyClipBoard: (text: string) => void;

  send: boolean;
  showSend: () => void;
  sendOk: () => void;
  sendCancel: () => void;

  token: boolean;
  showToken: () => void;
  tokenOk: () => void;
  tokenCancel: () => void;
  onClickTokenList: () => void;
  onClickTransaction: () => void;

  tab: boolean;

  swap: boolean;
  showSwap: () => void;
  swapOk: () => void;
  swapCancel: () => void;

  onClickMoveToPage: (path: string) => () => void;
  address: string;
  userNm: string;
  // userinfo: {};
  balance: string;
  symbol: string;
  tokenId: number;
  walletId: number;
  trans: any;
  setTrans: React.Dispatch<React.SetStateAction<any>>;
  loading: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setAdr: React.Dispatch<React.SetStateAction<string>>;
  setBal: React.Dispatch<React.SetStateAction<string>>;
  adr: string;
  bal: string;

  add: boolean;

  userinfo: {
    mainWallet: { userToken: [{ tokenSym: string; balance: string }] };
  };
  confirmLoading: boolean;
  result: {
    userTokenList: [];
    tokenList: [];
  };
  setFromId: Dispatch<SetStateAction<string>>;
  setToId: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<string>>;
  check: boolean;
  swapEstimate: () => void;
  swapEs: any;

  onChangeToken: (key: string) => void;
  tokenResult: {};
  setTokenAdd: React.Dispatch<React.SetStateAction<string>>;

  // name: string;
  // userId: number;
  // userNet: [
  //   {
  //     chainID: string;
  //     networkId: number;
  //     networkNm: string;
  //     networkType: string;
  //   }
  // ];
  // wallet: [
  //   {
  //     address: string;
  //     deFlag: string;
  //     walletId: number;
  //     walletNm: string;
  //     token: [
  //       {
  //         balance: string;
  //         symbol: string;
  //         tokenId: number;
  //       }
  //     ];
  //   }
  // ];
}
