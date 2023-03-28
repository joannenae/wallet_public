import { Dispatch, SetStateAction } from "react";

export interface IHeaderPresenter {
  active: boolean;
  accountActive: boolean;
  onClickActive: () => void;
  onClickAccountActive: () => void;
  onClickMoveToPage: (path: string) => () => void;
  setAccountActive: Dispatch<SetStateAction<boolean>>;
  onClickNetWork: () => void;
}
