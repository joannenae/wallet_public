import { ChangeEvent } from "react";
export interface ISendPresenter {
  onChangeToken: (value: string) => void;
  symbol: string;
  address: string;
  userNm: string;
  userinfo: {
    mainWallet: {
      userToken: [{ tokenSym: string; balance: string }];
    };
  };
  token: string;
  txFee: string;
  onChangeBalance: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeGetAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  sentToken: () => void;
  add: boolean;
  error: string;
}
export interface ISendContainer {
  userinfo: {
    mainWallet: { userToken: [{ tokenSym: string; balance: string }] };
  };
  symbol: string;
  address: string;
  userNm: string;
  walletId: number;
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
  setAdr: React.Dispatch<React.SetStateAction<string>>;
  setBal: React.Dispatch<React.SetStateAction<string>>;
  adr: string;
  bal: string;
}
