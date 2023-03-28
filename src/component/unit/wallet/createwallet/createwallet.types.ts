import { ChangeEvent } from "react";
export interface ICreatePresenter {
  current: number;
  blur: boolean;
  mnemonic?: [];
  hash?: string | undefined;
  items: { key: string; title: string }[];
  steps: { title: string }[];
  success: boolean;
  next: () => void;
  prev: () => void;
  onClickCreate: () => void;
  onClickMoveToPage: (path: string) => () => void;
  onChangeMnemonic: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMnemonic: () => void;
}
