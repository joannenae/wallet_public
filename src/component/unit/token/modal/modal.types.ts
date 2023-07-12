import { SetStateAction, Dispatch } from "react";

export interface IModalPresenter {
  onChangeToken: (key: string) => void;
  tokenResult: {
    tokenList: [];
  };
  onChangeTokenAdd: (value: any) => void;
}
export interface IModalContainer {
  onChangeToken: (key: string) => void;
  tokenResult: {
    // tokenList: [];
  };
  setTokenAdd: Dispatch<SetStateAction<string>>;
}
