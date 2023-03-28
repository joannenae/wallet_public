import { ChangeEvent } from "react";

export interface ILoginPresenter {
  email: string;
  password: string;
  visible: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickVisible: () => void;
  onClickLogin: () => void;
  onClickMoveToPage: (path: string) => () => void;
}
