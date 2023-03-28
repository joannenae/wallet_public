import { ChangeEvent } from "react";
export interface IGetWalletPresenter {
  number: [];
  word: string;
  onClickGetWallet: () => void;
  onChangeWord: (event: ChangeEvent<HTMLInputElement>, i: number) => void;
  onClickMoveToPage: (path: string) => () => void;
}
