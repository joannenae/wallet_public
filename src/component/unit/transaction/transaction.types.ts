import React from "react";

export interface ITransactionPresenter {
  handleCopyClipBoard: (text: string) => void;
  isCopy: boolean;
  trans: any;
  loading: boolean;
}

export interface ITransactionContainer {
  trans: any;
  loading: boolean;
  walletId: number;
  setTrans: React.Dispatch<React.SetStateAction<boolean>>;
}
