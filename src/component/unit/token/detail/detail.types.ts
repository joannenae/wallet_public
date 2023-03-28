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
  showTrans: () => void;
  transOk: () => void;
  transCancel: () => void;
  trans: boolean;
  swap: boolean;
  send: boolean;
  token: boolean;
  onClickMoveToPage: (path: string) => () => void;
}
