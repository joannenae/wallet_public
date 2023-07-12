import { ChangeEvent } from "react";
export interface ICreatePresenter {
  current: number;
  blur: boolean;
  mnemonic?: [];
  hash?: string | undefined;
  items: { key: string; title: string }[];
  steps: { title: string }[];
  success: boolean;
  array: [];
  next: () => void;
  prev: () => void;
  onClickCreate: () => void;
  onClickMoveToPage: (path: string) => () => void;
  onChangeMnemonic: (event: ChangeEvent<HTMLInputElement>, i: number) => void;
  onClickMnemonic: () => void;
}
