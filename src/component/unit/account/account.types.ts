import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IAccountContainer {
  setAccountActive: Dispatch<SetStateAction<boolean>>;
}
export interface IAccountPresenter {
  status: string;
  onClickCloseAccount: () => void;
  createModal: () => void;
  changeCreate: () => void;

  isCreateModal: boolean;
  handleOk: () => void;
  handleCancel: () => void;

  onChangeTab: (key: string) => void;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;

  defaultValue?: string | null | undefined;
  //   defaultValue: LabeledValue;
  selectChange?:
    | ((
        value: string,
        option:
          | {
              value: string;
              label: string;
            }
          | {
              value: string;
              label: string;
            }[]
      ) => void)
    | undefined;

  changeGet: () => void;

  name: string;
  onChangeCreate: (event: ChangeEvent<HTMLInputElement>) => void;
  destoryFile: () => void;

  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  file?: string[];

  onChangeKeyPass: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePrivateKey: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickWalletPk: () => void;
  onClickKeystore: () => void;

  createName: string;
  privatekey: string;
  keypassword: string;
  num: string;
}