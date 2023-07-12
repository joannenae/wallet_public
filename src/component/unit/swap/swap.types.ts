import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction } from "react";

export interface ISwapPresenter {
  onClickChange: () => void;
  onChangeTokenFrom: (value: any, id: string) => void;
  onChangeTokenTo: (value: any, id: string) => void;
  inputValue: {
    first: string;
    second: string;
  };
  result: {
    tokenList: [];
    userTokenList: [];
  };
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void;
  swapEs: {};
}
export interface ISwapContainer {
  result: {
    tokenList: [];
    userTokenList: [];
  };
  setFromId: Dispatch<SetStateAction<string>>;
  setToId: Dispatch<SetStateAction<string>>;
  setValue: Dispatch<SetStateAction<string>>;
  swapEs: {};
}
