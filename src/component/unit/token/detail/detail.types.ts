export interface ITokenDetailPresenter {
  showToken: () => void;
  tokenCancel: () => void;
  tokenOk: () => void;
  showSend: () => void;
  sendOk: () => void;
  sendCancel: () => void;
  showSwap: () => void;
  swapOk: () => void;
  swapCancel: () => void;
  swap: boolean;
  send: boolean;
  token: boolean;
  onClickMoveToPage: (path: string) => () => void;
  loading: boolean;
  onClickMain: () => void;
  result: any;
  handleCopyClipBoard: (text: string) => void;
  isCopy: boolean;
}

export interface ITokenDetailPresenterItem {
  showTrans: () => void;
  transOk: () => void;
  transCancel: () => void;
  trans: boolean;
  handleCopyClipBoard: (text: string) => void;
  isCopy: boolean;
  el: {
    txType: string;
    txHash: string;
    txBalance: string;
    createdAt: string;
    ttxGetWallet: {
      address: string;
    };
    ttxFromWallet: {
      address: string;
      ttxGas: string;
    };
    ttxPayWallet: {
      address: string;
      ttxGas: string;
    };
  };
}
