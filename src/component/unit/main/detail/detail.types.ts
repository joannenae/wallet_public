import { ChangeEvent } from "react";
import { SetStateAction, Dispatch } from "react";
export interface IDetailPresenter {
  change: boolean;
  isCopy: boolean;
  onChangeCancel: () => void;
  onChangeEdit: () => void;

  secret: boolean;
  showSecret: () => void;
  secretOk: () => void;
  secretCancel: () => void;

  password: string;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;

  handleCopyClipBoard: (text: string) => void;

  status: boolean;

  onClickPassword: () => void;

  showKeystore: () => void;

  keyOpen: boolean;
  keystoreOk: () => void;
  keystoreCancel: () => void;

  keypass: string;
  keypassConfirm: string;
  setKeyPass: Dispatch<SetStateAction<string>>;
  setKeyPassConfirm: Dispatch<SetStateAction<string>>;

  userNm: string;
  address: string;

  privatekey: string;
  error: string;

  onChangeEditName: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickEdit: () => void;

  edit: string;
}

export interface IDetailContainer {
  userNm: string;
  address: string;
  walletId: number;
}
