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
  userinfo: {};
  balance: string;
  symbol: string;
  tokenId: number;
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
