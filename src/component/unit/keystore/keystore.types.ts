import { SetStateAction, Dispatch, ChangeEvent } from "react";

export interface IKeystoreContainer {
  keypass: string;
  keypassConfirm: string;
  setKeyPass: Dispatch<SetStateAction<string>>;
  setKeyPassConfirm: Dispatch<SetStateAction<string>>;
}

export interface IKeystorePresenter {
  isPassword: boolean;
  isPasswordConfirm: boolean;

  onChangePwCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (event: ChangeEvent<HTMLInputElement>) => void;
}
